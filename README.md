Counter for Page Loading
============

Example of Navigation Timing

3 functions are included:

1) to display the time to load from one page to the fully loaded next page.

2) to display time of transition. From trigger to load next page, to the initial load of new page.

3) time that takes to load new page.


API TIMING Options:
==================

connectEnd                 Time when server connection is finished.
connectStart               Time just before server connection begins.
domComplete                Time just before document readiness completes.
domContentLoadedEventEnd   Time after DOMContentLoaded event completes.
domContentLoadedEventStart Time just before DOMContentLoaded starts.
domInteractive             Time just before readiness set to interactive.
domLoading                 Time just before readiness set to loading.
domainLookupEnd            Time after domain name lookup.
domainLookupStart          Time just before domain name lookup.
fetchStart                 Time when the resource starts being fetched.
loadEventEnd               Time when the load event is complete.
loadEventStart             Time just before the load event is fired.
navigationStart            Time after the previous document begins unload.
redirectCount              Number of redirects since the last non-redirect.
redirectEnd                Time after last redirect response ends.
redirectStart              Time of fetch that initiated a redirect.
requestStart               Time just before a server request.
responseEnd                Time after the end of a response or connection.
responseStart              Time just before the start of a response.
timing                     Reference to a performance timing object.
navigation                 Reference to performance navigation object.
performance                Reference to performance object for a window.
type                       Type of the last non-redirect navigation event.
unloadEventEnd             Time after the previous document is unloaded.
unloadEventStart           Time just before the unload event is fired.