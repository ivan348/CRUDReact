var db = require("./../dao/db");
var services = require("./../services/services");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' }).single('simpleCSV');;
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
	app.post("/api/uploadcsv", function(req, res) {
		upload(req,res,function(err) {
	        if(err) {
	            return res.end("Error uploading file.");
	        }
	        res.end("File is uploaded");
	    })
	})
}
module.exports = controller;