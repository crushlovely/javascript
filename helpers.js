// helpers.js

// 
// global data-js query
// $.js('foo');

jQuery.js = function(jsSelector, scope) {
    var scopeSelector = (scope && scope instanceof jQuery) ? scope.selector : 'html'

    return jQuery(scopeSelector + ' [data-js~="' + jsSelector + '"]');
}

// 
// scoped data-js query
// $.js('foo').js('bar');

jQuery.fn.js = function(jsSelector) {
    return $.js(jsSelector, this);
}
