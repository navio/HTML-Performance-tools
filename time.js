
function timeFromPreviousToFullNew(){ // Time from previous navigation to a new page, to complete load of new page.
	return (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart);
}

function timeFromPreviousToStartNew(){ // Time spent from navigation to a new page, to initial load of new page.
	return (window.performance.timing.loadEventStart - window.performance.timing.navigationStart);
}

function timeToLoadFullPage() { // Time to load page once in the page.
	return (timeFromPreviousToFullNew() - timeFromPreviousToStartNew());
}


var page = document.location.pathname;
var pt = window.performance.timing;
var sh = [];

/*
Returns the time range from clicking a link on the previosu page, to the time after load event completitions.
Clicking on a link includes time of previous page unload.
*/
var transitionTime = pt.domContentLoadedEventEnd - pt.navigationStart;
/*
Returns the time just before server connection begins to the time just before document readiness reach completness.
*/

var domLoadCompeted = pt.domComplete - pt.connectStart;

/*
Returns the time that takes for elements to get loaded in the DOM.

The range goes from:
the time just before DOMContentLoaded starts, 
to the time after DOMContentLoaded event is complet. 
*/
var domContentLoad = pt.domContentLoadedEventEnd - pt.domContentLoadedEventStart;

/*
Returns the time that takes to look up for the domain
*/
var domainLookUp = pt.domainLookupEnd - pt.domainLookupStart;

/*
Returns the time that takes to run the load event.
*/
var loadEvent = pt.loadEventEnd - pt.loadEventStart;
