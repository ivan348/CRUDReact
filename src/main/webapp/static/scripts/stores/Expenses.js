define(function(require) {
    var Reflux = require("reflux");
    var _ = require("lodash");
    var _collection = [];
    // var expenseActions = require("actions/actions");
    var store = Reflux.createStore({
        add: function(item) {
            _collection.push(item);
            this.trigger(_collection);
            return _collection;
        },
        remove: function(item) {
        	_.remove(_collection, function(val){
        		return item.id == val.id;
        	})
        	this.trigger(_collection);
        	return item;
        },
        set: function(collection) {
            _collection = collection;
            this.trigger(_collection);
            return _collection;
        }
    })
    return store;
})
