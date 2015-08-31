var Reflux = require("reflux");

var actions = Reflux.createActions([
	"get",
	"add",
	"delete",
	"edit"]);

actions.get.listen(function(){
	// http.get("/");
});
actions.add.listen(function(){
	console.log("addededed")
});