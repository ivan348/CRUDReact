var rest = function(app, url, table){
	app.get(url, function(req,res){
		res.send([{
			name: "expense 1",
			value: 12000
		},{
			name: "expense 2",
			value: 45000
		},{
			name: "expense 3",
			value: 15900
		}]);
	})
	app.post(url, function(req, res){
		res.send(req.body);
	})
}
module.exports = rest;
