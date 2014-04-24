var ko = require('knockout');
var hashParser = require('hash-state/lib/hash-parser');

module.exports = {
	update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
        element.href = hashParser.stringify(ko.toJS(valueAccessor()));
    }
}