var Reflux = require("reflux");

var actions = Reflux.createActions([
	"getExpense",
	"addExpense",
	/*"deleteExpense",
	"editExpense"*/]);

actions.getExpense.listen(function(){
	// http.get("/");
});
actions.addExpense.listen(function(val){
	console.log("addededed", val);
});
module.exports = actions;