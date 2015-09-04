define(function(require){
	var $ = require("jquery");
	var http = {
		get: function(url){
			return $.get(url);
		},
		post: function(url, obj){
			return $.post(url, obj);
		},
		put: function(url, obj){
			return $.ajax({
				url: url,
				data: obj,
				method: "PUT",
				dataType: "json"
			})
		}
	}
	return http;
})