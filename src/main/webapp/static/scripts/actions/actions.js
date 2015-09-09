define(function(require){
	var Reflux = require("reflux");
	var Expenses = require("stores/Expenses");
	var Summ = require("stores/Summ");
	var http = require("api");
	var actions = Reflux.createActions([
		"getExpenses",
		"addExpense",
		"deleteExpense",
		"editExpense",
		"getSumm"]);

	actions.getExpenses.listen(function(){
		http.get("/api/expenses").done(Expenses.set);
	});
	actions.editExpense.listen(function(val){
		http.put("/api/expenses", val).done(Expenses.edit);
	});
	actions.addExpense.listen(function(val){
		http.post("/api/expenses", val).done(Expenses.add);
	});
	actions.deleteExpense.listen(function(val){
		http.delete("/api/expenses", val).done(Expenses.remove);
	});
	actions.getSumm.listen(function(val){
		http.get("/api/summ", val).done(Summ.set);
	});
	return actions;
})