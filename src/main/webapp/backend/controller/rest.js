var db = require("./../dao/db");
var rest = function(app, url, table){
	app.get(url, function(req,res){
		db.getExpenses(function(result){
			res.json(result);
		})
		// res.send([{
		// 	name: "expense 1",
		// 	value: 12000
		// },{
		// 	name: "expense 2",
		// 	value: 45000
		// },{
		// 	name: "expense 3",
		// 	value: 15900
		// }]);
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
}
module.exports = rest;
