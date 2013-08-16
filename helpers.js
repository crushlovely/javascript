// helpers.js

// 
// global data-js query
// $.js('foo');

jQuery.js = function(jsSelector) {
    return $('html').js(jsSelector);
}

// 
// scoped data-js query
// $.js('foo').js('bar');

jQuery.fn.js = function(jsSelector) {
    return this.find('.js-' + jsSelector);
}
