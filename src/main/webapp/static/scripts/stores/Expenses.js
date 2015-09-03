define(function(require){
	var Reflux = require("reflux");
	var _collection = [];
	// var expenseActions = require("actions/actions");
	var store = Reflux.createStore({
	    // listenables: expenseActions,
		// init: function(){
		// 	this.listenTo(expenseActions.addExpense, this.onGetExpenses);	
		// },
		add: function(item){
			_collection.push(item);
			this.trigger(_collection);
			return _collection;
		},
		remove: function(item){

		},
		set: function(collection){
			_collection = collection;
			this.trigger(_collection);
			return _collection;
		}
	})
	return store;
})