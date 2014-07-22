
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

var transitionTime = pt.domContentLoadedEventEnd - pt.navigationStart;

var domLoadCompeted = pt.domComplete - pt.connectStart;

var domContentLoad = pt.domContentLoadedEventEnd - pt.domContentLoadedEventStart;

var domainLookUp = pt.domainLookupEnd - pt.domainLookupStart;

var loadEvent = pt.loadEventEnd - pt.loadEventStart;
