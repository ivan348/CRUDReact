define(function(require){
	var Reflux = require("reflux");
	var Expenses = require("stores/Expenses");
	var Stat = require("stores/Stat");
	var http = require("api");
	var _ = require("lodash");
	var actions = Reflux.createActions([
		"getExpenses",
		"addExpense",
		"deleteExpense",
		"editExpense",
		"getStat",
		"uploadFile"]);

	actions.getExpenses.listen(function(){
		http.get("api/expenses").done(Expenses.set);
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
	actions.getStat.listen(function(val){
		http.get("/api/stats?currency=" + val).done(Stat.set);
	});
	actions.uploadFile.listen(function(files){
		var data = new FormData();
		_.each(files, function(value, key) {
			data.append(key, value);
		})
		http.post("/api/uploadcsv", data, {processData: false}).done(function(res) {
			console.log("uploaded")
		})
	});
	return actions;
})