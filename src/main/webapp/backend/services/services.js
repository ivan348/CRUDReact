var _ = require("lodash");
var getSumm = function(list){
	var result = {};
	var currencies = _.uniq(_.pluck(list, 'currency'));
	_.each(currencies, function(curr){
		result[curr] = _.round(_.sum(_.filter(list, {currency: curr}), function(obj){
			return obj.value;
		}), 2);
	})
	return result;
}
module.exports = {
	getSumm: getSumm
}