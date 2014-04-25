var ko = require('knockout');
var HashState = require('hash-state');

module.exports = {
	update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
        element.href = HashState.stringify(ko.toJS(valueAccessor()));
    }
}