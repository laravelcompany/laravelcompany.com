---
title: Analytics dashboard
author: _chris
date: 2024-12-01
category: Laravel
views: 1800
replies: 15
---

> Original forum thread content:
> "Hi all, I'm in the process of creating an admin dashboard which will be used to monitor several other applications remotely. The webapp will include an analytics page which shows the analytics of the other applications it is monitoring. Before writing my own analytics code from scratch I'm wondering whether there are any packages which do this? I've looked at Spatie's analytics"

## Building Analytics Dashboards in Laravel: Packages, Patterns, and Approaches

_chris is undertaking a common but complex project: building a unified analytics dashboard that aggregates data from multiple applications. The instinct to avoid rewriting analytics code from scratch is correct—this is a solved problem with many excellent tools available.

### Understanding the Analytics Dashboard Problem

An analytics dashboard for monitoring multiple applications typically needs to:

1. **Collect metrics** from various sources (databases, APIs, log files)
2. **Store time-series data** efficiently
3. **Aggregate and process** data for meaningful insights
4. **Visualize trends** through charts and graphs
5. **Alert on anomalies** or threshold breaches

Building this from scratch means implementing each of these layers, which is significant engineering effort.

### Laravel Analytics Packages

**Spatie Laravel Analytics**
Chris mentioned looking at Spatie's package. Spatie offers `spatie/laravel-analytics`, which provides a Laravel wrapper around the Google Analytics API. This is excellent for pulling Google Analytics data into your application but is specific to Google Analytics as a data source.

```bash
composer require spatie/laravel-analytics
```

The package handles authentication with Google and provides a clean facade for fetching page views, sessions, and other metrics.

**Alternative Data Sources**
If you're monitoring internal applications rather than website traffic, consider:

- **Application Performance Monitoring (APM)**: Datadog, New Relic, Sentry
- **Log-based metrics**: ELK Stack (Elasticsearch, Logstash, Kibana), Grafana with Loki
- **Database metrics**: Direct queries or tools like `laravel-doctrine/migrations`
- **Custom event tracking**: Implement your own event dispatch system

### Self-Hosted Options

For organizations wanting full control, several self-hosted solutions integrate well with Laravel:

**1. Matomo (formerly Piwik)**
Matomo is a full-featured, self-hosted analytics platform. It tracks visitors, goals, and provides an API for programmatic access. You can fetch Matomo data from your Laravel dashboard.

**2. Plausible Analytics**
Lightweight and privacy-focused, Plausible offers a simple API. Their self-hosted option or cloud service can feed into custom dashboards.

**3. Umami**
Another privacy-friendly alternative with a straightforward API.

**4. Grafana + Prometheus**
For infrastructure and application metrics, this combination is industry standard. Prometheus scrapes metrics; Grafana visualizes them. Laravel apps can expose metrics via endpoints that Prometheus scrapes.

**5. Chronos / Homegrown with Laravel**
If you need something lightweight, you can build your own using Laravel's task scheduling and a simple database table for storing metrics:

```php
Schema::create('application_metrics', function (Blueprint $table) {
    $table->id();
    $table->string('application_name');
    $table->string('metric_type');
    $table->float('value');
    $table->timestamp('recorded_at');
});
```

Then use `Horizon` or `Scheduler` to collect data at intervals.

### Visualization Libraries

Once you have the data, you need to display it:

**Chart.js** — Simple, lightweight canvas charts
**ApexCharts** — Modern interactive charts with good Laravel ecosystem support
**Highcharts** — Comprehensive with extensive chart types
**ECharts** — Apache-backed, very feature-rich

Laravel-specific chart packages:
- `axlon/laravel-charts` — Wrapper for Chart.js
- ` ConsoleTVs/Charts` — Multi-library support with Laravel integration

### Architecture Patterns for Multi-Application Monitoring

Since you're tracking multiple applications, consider these patterns:

**1. Shared Database Schema**
All applications write metrics to a shared database with an `application_id` foreign key.

**2. API-First Collection**
Applications push metrics to your dashboard API via HTTP. This is more firewall-friendly than direct database access.

**3. Push Gateway (Prometheus Pattern)**
Short-lived applications push metrics to an intermediate service that Prometheus can scrape reliably.

**4. Event-Driven**
Applications emit events (e.g., `MetricRecorded`); your dashboard listens and stores them.

### Security Considerations

When building a dashboard that monitors production applications:

- **Authentication/Authorization**: Use [Laravel Sanctum](20-laravel-13-sanctum-fortify-api-routes-redirecting.md) or Fortify for dashboard access. Ensure only authorized personnel can view sensitive metrics.
- **API Security**: If applications push metrics, use signed URLs or API tokens.
- **Data Privacy**: Be careful with PII in analytics data. Consider the [analytics dashboard's need for anonymization](25-tracking-transferred-bytes-on-the-client-side.md).
- **Rate Limiting**: Protect your metrics collection endpoints from abuse.

### Performance Considerations

Dashboards can become heavy. Optimize by:

- **Caching aggregated data**: Don't calculate metrics on every page load. Use cache tags.
- **Database indexing**: Index `application_id`, `metric_type`, and `recorded_at` heavily.
- **Materialized views**: For complex aggregations, pre-compute results.
- **Frontend optimization**: Load charts asynchronously; use skeleton screens.

### Real-World Implementation Example

A typical implementation might look like:

1. **Data Collection**: A scheduled command in each monitored app runs every minute, pushing CPU, memory, request count, and error rate to a central API.
2. **Storage**: Metrics stored in PostgreSQL with partitioning by month for historical data.
3. **Aggregation**: A separate job processes raw metrics into 5-minute, 1-hour, and 1-day averages.
4. **API Layer**: A Laravel API serves metric data to the frontend with caching.
5. **Frontend**: Vue.js dashboard using ApexCharts with auto-refresh.

### Integration with Other Systems

You might also want to correlate analytics with financial data if you're running a [self-hosted personal finance tracking app](13-finance-self-hosted-personal-finance-tracking-web-app.md). Being able to track revenue alongside application performance can be powerful.

Additionally, if you need to generate reports from this dashboard (see [Issue with embedding custom fonts in PDF using Spatie Browsershot](15-issue-with-embedding-custom-fonts-in-pdf-using-spatie-browsershot.md)), you can schedule periodic PDF generation for executives.

### Recommended Approach

For Chris's use case:
1. Start with **Spatie Laravel Analytics** if the source data is from Google Analytics
2. For application-specific metrics, consider a **custom lightweight collector** writing to a central database
3. Use **Grafana** for immediate visualization while building your custom dashboard
4. Build the Laravel dashboard as a wrapper around these data sources

The key insight is that analytics is a pipeline: collect → store → process → visualize. You can mix and match tools at each stage. You don't need to build everything from scratch.

---

## Related Posts

- [Finance - Self-hosted personal finance tracking web app](13-finance-self-hosted-personal-finance-tracking-web-app.md) — You may also need analytics for financial data.
- [Issue with embedding custom fonts in PDF using Spatie Browsershot](15-issue-with-embedding-custom-fonts-in-pdf-using-spatie-browsershot.md) — Exporting analytics reports as PDFs.
- [Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP](14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.md) — Performance optimization for high-traffic dashboards.
