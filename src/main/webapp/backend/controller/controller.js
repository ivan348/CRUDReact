var db = require("./../dao/db"),
	services = require("./../services/services"),
	formidable = require('formidable'),
	util = require("util"),
	fs = require("fs");
var controller = function(app) {
    app.get("/api/summ", function(req, res) {
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
    	var form = new formidable.IncomingForm();
    	form.uploadDir = "uploads";
	    form.parse(req, function(err, fields, files) {
	    	var file = files.file;
	    	console.log(file)
	    	if(file && file.type == "text/csv") {
		      		services.importFromCsv(file.path);	
		      		res.sendStatus(200);
	    	} else {
	    		fs.unlink(file.path, function(err) {
					if(err) {
						console.log(err);
					}
				})
	    		res.sendStatus(405)
	    	}
	    });
    })
}
module.exports = controller;
