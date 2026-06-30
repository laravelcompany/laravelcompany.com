---
title: Difficulty scaling Laravel Horizon across multiple instances (ECS / Auto Scaling)
author: Iagoss
date: 2024-12-01
category: Laravel
views: 1700
replies: 14
---

> Original forum thread content:
> "Hello everyone, I'm deploying a Laravel application in a containerized architecture (AWS ECS), where I've split services into three separate tasks: Web (HTTP requests) Horizon (job processing) Scheduling (cron tasks) Each service has its own auto scaling policy, so new instances can be created dynamically as demand increases. The issue I'm facing is that when trying to scale H..."

## Scaling Laravel Horizon Across Multiple AWS ECS Instances

Iagoss's deployment architecture—splitting Laravel into Web, Horizon, and Scheduler tasks in ECS with auto-scaling—is a sophisticated production setup. The scaling issues with Horizon stem from how Laravel manages queue workers and supervisor processes in a containerized, auto-scaling environment.

### Understanding Laravel Horizon

Horizon is a queue manager that provides:
- Dashboard for monitoring queue workers
- Auto-scaling of worker processes
- Job batching and notifications
- Worker tags for different queues

Horizon works by running `supervisor` processes that manage PHP worker processes. Each worker process consumes jobs from a Redis queue.

### The Core Problem: Dynamic Instances + Supervisor

When ECS auto-scales Horizon tasks, new container instances appear and start Horizon processes. The challenge is:

**1. Supervisor Auto-Discovery**
Horizon uses Redis to track worker counts and balance load. When multiple Horizon instances run:
- Each instance thinks it owns the worker counts
- They overwrite each other's supervisor configurations
- Workers may terminate unexpectedly

**2. Race Conditions on Scaling**
- Instance A starts and sets supervisor config in Redis
- Instance B starts before A's config is fully written
- B overwrites A's config, stopping A's workers

**3. Stateful Workers in Stateless Containers**
Horizon expects workers to be long-lived. In ECS:
- Containers can be killed/replaced at any time
- Workers processing jobs may be interrupted
- Job deduplication isn't automatic (jobs may run twice)

### Solution: Horizontal Scaling Best Practices

**Don't Run Horizon on Auto-Scaling Tasks**
The simplest and most reliable approach:
- Run Horizon on fixed, long-lived instances (or a single ECS task with min=1, max=1)
- Scale worker *size* (number of processes) via `horizon:work` directly
- Use ECS Service Auto Scaling for the Horizon service only based on queue depth

```php
// config/horizon.php
'environments' => [
    'production' => [
        'supervisor-1' => [
            'connection' => 'redis',
            'queue' => ['default'],
            'balance' => 'auto', // Auto-scales based on queue time
            'maxProcesses' => 20,
            'balanceMaxShift' => 1,
        ],
    ],
],
```

**Use a Dedicated Monitoring Instance**
If you must scale horizontally:
- One Horizon instance acts as the "master" (with the dashboard)
- Others run as pure workers: `php artisan horizon --no-interaction --foreground`
- The master manages dimensions via Redis

But this adds complexity and is generally not recommended.

### ECS Service Configuration

**Task Placement Strategy**
Use `binpack` or `spread` to distribute Horizon tasks:
```json
{
  "placementConstraints": [],
  "placementStrategy": [
    {"field": "instanceId", "type": "spread"}
  ]
}
```

**Graceful Shutdown**
ECS sends SIGTERM before killing tasks. Ensure Horizon handles it:
```php
// In Horizon's supervisor configuration
'timeout' => 60,
'handleTimeout' => true,
```

**Health Checks**
Configure ECS health checks that actually verify Horizon is functional:
```bash
curl -f http://localhost/horizon/api/health
```

### Alternative: Supervisor Outside of Horizon

Run Horizon in "worker-only" mode on auto-scaled tasks:
```bash
php artisan horizon:work --supervisor=supervisor-1
```

This starts workers without the Horizon management layer, avoiding the config conflict.

### Monitoring and Observability

**Queue Depth Monitoring**
Scale based on Redis queue length:
```php
$queueLength = Cache::store('redis')->get('queues:default:length');
```

Use CloudWatch alarms to trigger auto-scaling:
```bash
aws cloudwatch put-metric-alarm \
  --alarm-name "horizon-queue-depth" \
  --metric-name ApproximateNumberOfMessagesVisible \
  --namespace "AWS/SQS" \
  --threshold 1000
```

**Horizon Metrics**
Horizon exposes Prometheus-compatible metrics:
```
GET /horizon/api/metrics
```

Configure Grafana dashboards for real-time visibility.

### Handling Job Failures at Scale

When containers are killed during job execution:
- Jobs may revert to the queue (if timeout < job runtime)
- Or be marked failed
- Use `--timeout` carefully

Consider idempotent job design (see [Recently Started Paying for AI](18-recently-started-paying-for-ai.md) for data integrity patterns).

### ECS Task Definition Example

```json
{
  "family": "horizon",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "containerDefinitions": [
    {
      "name": "horizon",
      "image": "yourapp:latest",
      "command": ["php", "/var/www/html/artisan", "horizon"],
      "essential": true,
      "portMappings": [
        {"containerPort": 9000, "protocol": "tcp"}
      ],
      "environment": [
        {"name": "APP_ENV", "value": "production"},
        {"name": "REDIS_HOST", "value": "your-redis-cluster"}
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/horizon",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

### Scaling the Scheduler Task

Your separate Scheduler task addresses a known issue: ECS task restarts can cause duplicate cron runs. Solutions:

**Option A: Use a Single Scheduler Instance**
```yaml
# ecs-service-scheduler.yml
deploymentConfig:
  minimumHealthyPercent: 100
  maximumPercent: 100
```
Ensures only one instance runs.

**Option B: Leader Election**
```php
// app/Console/Kernel.php
if (!Cache::add('scheduler:leader', true, 60)) {
    return; // Another instance is the leader
}
```

**Option C: Use Laravel's Built-in Scheduler with ECS Fargate**
AWS Fargate Spot + scheduled tasks (EventBridge) can trigger the scheduler without long-running tasks.

### Conclusion

The key insight is that Horizon's auto-scaling and supervisor management work best with stable, long-lived processes. Cloud auto-scaling is designed for HTTP stateless servers, not stateful queue workers.

Recommended architecture:
1. One dedicated Horizon instance for dashboard and management
2. Auto-scale only if using a custom worker management solution
3. Use Redis queue depth as the scaling signal
4. Implement graceful shutdown and job timeouts

For Iagoss's three-task setup, freeze Horizon scaling and instead scale the *number* of workers via Horizon's own auto-balancer (controlled by queue depth).

---

## Related Posts

- [Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP](14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.md) — Server options for high-performance queue processing.
- [Printer selections from Laravel](12-printer-selections-from-laravel.md) — Background job management patterns.
- [Database Session creates another record after logging out](09-database-session-creates-another-record-after-logging-out.md) — State management in containerized Laravel environments.
