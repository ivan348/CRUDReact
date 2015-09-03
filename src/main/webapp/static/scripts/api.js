define(function(require){
	var $ = require("jquery");
	var http = {
		get: function(url){
			return $.get(url);
		},
		post: function(url, obj){
			return $.post(url, obj);
		}
	}
	return http;
})