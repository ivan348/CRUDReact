var db = require("./../dao/db");
var services = require("./../services/services");
var controller = function(app) {
	app.get("/api/summ", function(req,res) {
	    db.getExpenses(function(list) {
	    	res.send(services.getSumm(list));
	    });
	})
	app.get("/api/stats", function(req, res) {
		db.getExpensesByCurrency(req.query.currency, function(list) {
			res.send(services.getStats(list));
		})
	})
}
module.exports = controller;