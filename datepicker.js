var $ = require('jquery');
var ko = require('knockout');
var _ = require('lodash');

var defaultOptions = {};

module.exports = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        $(element).datepicker(_.extend({}, defaultOptions, ko.toJS(valueAccessor())))
    },

    config: function(options) {
        _.extend(defaultOptions, options);
    }
}