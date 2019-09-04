var location = window.history.location || window.location;

handleUrlChange(location.href);

$(document).on('click', 'a.ajax', function(e) {
    e.preventDefault();
    history.pushState(null, null, this.href);
    handleUrlChange(this.href);
});

$(window).on('popstate', function(e) {
    handleUrlChange(location.href);      
});

function handleUrlChange(url){
     // example url: www.foo.com?page=details&id=1
     var page = getQueryStringParam('page') || 'index';
     $('#dynamic-content').load(page + '.html');
}