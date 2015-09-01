define(function(require){
	var Reflux = require("reflux");
	var Expenses = require("stores/Expenses");

	var actions = Reflux.createActions([
		"getExpenses",
		"addExpense",
		"deleteExpense",
		"editExpense"]);

	actions.getExpenses.listen(function(){
		// http.get("/");
	});
	actions.addExpense.listen(function(val){
		console.log("action add", val);
	});
	return actions;
})