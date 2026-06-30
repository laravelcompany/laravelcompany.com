---
title: AI Field guide page doesn't mark as complete the seen lessons
author: ramirobrescia
date: 2024-12-01
category: Feedback
views: 900
replies: 4
---

> Original forum thread content:
> "Hello Jeff and colleagues. I'm watching the 'AI Field Guide' course, and I've noticed that the lessons I've already watched aren't marking as complete. Thank you. A hug from Argentina"

## Debugging Course Progress Tracking: Why AI Field Guide Lessons Don't Mark as Complete

ramirobrescia's feedback about the AI Field Guide course not marking watched lessons as complete is a user experience issue that touches on learning platform design, local state management, and server-side progress tracking. This analysis covers how course progress tracking works, why failures happen, and what users and developers can do.

### How Course Progress Tracking Typically Works

Online learning platforms track progress through:

**1. Server-Side Records**
The most reliable approach. Each time a user views a lesson, the frontend sends a "mark as complete" event:
```javascript
fetch('/api/lessons/1/complete', {
    method: 'POST',
    headers: {'X-CSRF-TOKEN': token},
});
```

The backend updates a database record:
```php
class LessonProgress extends Model
{
    protected $fillable = ['user_id', 'lesson_id', 'completed_at'];
}
```

**2. Local Storage / IndexedDB**
Some platforms track progress locally and sync later. This is prone to data loss on refresh or tab close.

**3. Watch Time Detection**
Platforms may estimate completion based on video watch percentage (e.g., 90% watched = complete).

### Why Progress Might Not Save

**1. Client-Side JavaScript Errors**
A bug in the progress tracking code prevents the save call from firing. Check the browser console for errors.

**2. Network Failures**
The request fails silently due to:
- Poor connectivity
- CORS issues
- Authentication token expiration
- Server errors (500)

**3. Server-Side Validation Failures**
The API might be returning errors you don't see.

**4. Race Conditions**
If the platform uses optimistic UI updates, two concurrent requests might conflict. One may overwrite the other without merging.

**5. Cookie/Storage Clearing**
If progress is stored in cookies or localStorage and the user clears them, progress disappears.

**6. Session Timeout**
If tracking requires authentication and the session expires, the save might fail silently.

### Troubleshooting for Users

If you're experiencing this issue:

**1. Check Network Activity**
Open DevTools > Network tab > Filter by "Fetch/XHR". Look for requests to `/api/lessons/*/complete` or similar.

**2. Verify Authentication**
Ensure you're properly logged in. Some platforms track progress tied to your account; if the account context is lost, progress doesn't save.

**3. Try Different Browsers**
In-browser caching or extension interference (especially ad blockers or privacy tools) might block tracking requests.

**4. Clear Cache and Refresh**
Sometimes stale JavaScript prevents the tracking code from running.

**5. Contact Support with Details**
Provide:
- Browser and version
- Steps to reproduce
- Console errors
- Lesson IDs that failed

### Designing Robust Progress Tracking

For platform builders (like the AI Field Guide team):

**Use Idempotent Save Operations**
```php
public function markComplete(Request $request, Lesson $lesson)
{
    $progress = LessonProgress::updateOrCreate(
        ['user_id' => auth()->id(), 'lesson_id' => $lesson->id],
        ['completed_at' => now()]
    );
    
    return response()->json(['success' => true, 'completed' => $progress->completed_at]);
}
```

**Implement Retry Logic**
```javascript
async function markComplete(lessonId) {
    const maxRetries = 3;
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(`/api/lessons/${lessonId}/complete`, {
                method: 'POST',
                headers: {'X-CSRF-TOKEN': csrfToken},
            });
            if (response.ok) return await response.json();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await new Promise(r => setTimeout(r, 1000 * (i + 1)));
        }
    }
}
```

**Track Both Local and Server State**
Use localStorage for instant UI feedback, but always sync with server:
```javascript
// Save locally first
localStorage.setItem(`lesson-${lessonId}`, 'complete');
// Then sync to server
saveToServer(lessonId).catch(() => {
    // Queue for retry on next page load
    pendingSync.push(lessonId);
});
```

**Use the Beacon API for Page Leave**
When a user navigates away, ensure progress is saved:
```javascript
window.addEventListener('beforeunload', () => {
    navigator.sendBeacon('/api/lessons/sync', JSON.stringify(pendingSync));
});
```

See also: [Tracking transferred bytes on the client side](25-tracking-transferred-bytes-on-the-client-side.md) for client-side data persistence patterns.

**Handle Offline Gracefully**
For progressive web apps:
```javascript
if (!navigator.onLine) {
    // Queue progress for sync when back online
    offlineQueue.push({lessonId, timestamp: Date.now()});
    localStorage.setItem('offlineQueue', JSON.stringify(offlineQueue));
}
```

### Conclusion

Progress tracking failures are frustrating because they undermine user trust. The problem is often in the retry/sync logic between client and server rather than the fundamental architecture.

For platform developers: build with failure in mind. Assume networks drop and local storage gets cleared. Save progress eagerly and reconcile state regularly.

For users experiencing this issue: it's likely a temporary platform bug. Report it with details so the team can investigate.

---

## Related Posts

- [Tracking transferred bytes on the client side](25-tracking-transferred-bytes-on-the-client-side.md) — Client-side persistence and retry strategies.
- [Recently Started Paying for AI](18-recently-started-paying-for-ai.md) — AI-generated learning content and user engagement tracking.
- [How to review AI-generated code](02-how-to-review-ai-generated-code.md) — Ensuring generated course code handles edge cases correctly.
