var Reflux = require("reflux");
var _items = [];
var expenseActions = require("actions/actions");
var store = Reflux.createStore({
    listenables: expenseActions,
	init: function(){
		store.listenTo(this.onGetExpenses, expenseActions);	
	},
	onGetExpenses: function(){
		console.log("getting expenses");
		this.trigger([]);
	}
})
module.exports = store;