define(function(require){
	var Reflux = require("reflux");
	var _collection = [];
	var _ = require("lodash");
	var store = Reflux.createStore({
		get: function(){
			return _collection
		},
		set: function(collection){
			_collection = collection;
			return _collection
		},
		add: function(item){
			_collection.push(item);
			this.trigger(_collection);
			return _collection;
		},
		remove: function(item){

		}
	})
	return store;
})