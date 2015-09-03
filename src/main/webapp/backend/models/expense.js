var Waterline = require('waterline');

var expense = Waterline.Collection.extend({
	tableName: 'expense',
	attributes: {
		name: {
			type: "string",
			required: true
		},
		value: {
			type: "float",
			required: true
		}
	}
})