define(function(require) {
	var Reflux = require("reflux");
	var Summ = require("stores/Summ");
	var http = require("api");
	var actions = Reflux.createActions([
		"getSumm"]);
	actions.getSumm.listen(function(val){
		http.get("/api/summ", val).done(Summ.set);
	});
	return actions;
})