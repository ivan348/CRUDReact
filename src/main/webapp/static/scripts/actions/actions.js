define(function(require){
	var Reflux = require("reflux");
	var Expenses = require("stores/Expenses");
	var http = require("api");
	var actions = Reflux.createActions([
		"getExpenses",
		"addExpense",
		"deleteExpense",
		"editExpense"]);

	actions.getExpenses.listen(function(){
		http.get("/api/expenses").done(Expenses.set);
	});
	actions.editExpense.listen(function(val){
		http.put("/api/expenses", val).done();
	});
	actions.addExpense.listen(function(val){
		http.post("/api/expenses", val).done(Expenses.add);
	});
	return actions;
})