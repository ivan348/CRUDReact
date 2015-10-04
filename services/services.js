var _ = require("lodash"),
	fs = require("fs"),
	csv = require("fast-csv");
var getSumm = function(list){
	var result = {};
	var currencies = _.uniq(_.pluck(list, 'currency'));
	_.each(currencies, function(curr) {
		result[curr] = _.round(_.sum(_.filter(list, {currency: curr}), function(obj){
			return obj.value;
		}), 2);
	})
	return result;
}
var getStats = function(list) {
	var result = [];
	var categories = _.uniq(_.pluck(list, 'category'));
	var summ = _.sum(_.filter(list, {type: "-"}), function(obj){
		return obj.value;
	});
	_.each(categories, function(cat) {
		var obj = {};
		obj.name = cat;
		obj.y = _.round(_.sum(_.filter(list, {type: "-", category: cat}), function(obj){
			return obj.value;
		}) / summ * 100, 1);
		result.push(obj);
	})
	return result;
}
var importFromCsv = function(file) {
	var stream = fs.createReadStream(file);
	csv.fromStream(stream).on("data", function(data){
		var type = data[2] != "" ? "-" : "+";
		console.log(type)
	}).on("end", function(){
		fs.unlink(file, function(err) {
			if(err) {
				console.log(err);
			}
		})
	});
}
module.exports = {
	getSumm: getSumm,
	getStats: getStats,
	importFromCsv: importFromCsv
}