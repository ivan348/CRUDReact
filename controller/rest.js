var db = require("./../dao/db");
var rest = function(app, url, table){
	app.get(url, function(req,res){
		db.getExpenses(function(result){
			res.json(result);
		})
	});
	app.post(url, function(req, res){
		db.createExpense(req.body, function(result){
			res.send(result);
		});
	});
	app.put(url, function(req, res){
		db.editExpense(req.body);
		res.send(req.body);
	});
	app.delete(url, function(req, res){
		db.deleteExpense(req.body);
		res.send(req.body);
	});
}
module.exports = rest;
