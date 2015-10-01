var db = require("./../dao/db");
var services = require("./../services/services"); 
var multer = require('multer');
var crypto = require('crypto');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
  	var name = crypto.randomBytes(256).toString('hex');
    cb(null, name))
  }
})
var upload = multer({ dest: 'uploads/', storage: storage }).single('file');
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
		upload(req, res, function (err) {
	    if (err) {
	        console.log(req.file);
	        console.log(err);
	        return;
	    }

	    res.send('ok');
	  });
	   console.log(req.body);
	})
}
module.exports = controller;