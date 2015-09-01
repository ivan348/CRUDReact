var rest = function(app, url, table){
	app.get(url, function(req,res){
		res.send([1,2,3]);
	})
	app.post(url, function(req, res){
		res.send(obj)
	})
}
module.exports = rest;