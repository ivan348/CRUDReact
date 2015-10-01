define(function(require) {
    var $ = require("jquery");
    var _ = require("lodash");
    var http = {
        get: function(url) {
            return $.get(url);
        },
        post: function(url, obj, opt) {
            var conf = {
                url: url,
                data: JSON.stringify(obj),
                method: "POST",
                contentType: "application/json"
            }
            if (opt) {
                conf = _.assign(conf, opt)
            }
            console.log(conf)
            return $.ajax(conf);
        },
        put: function(url, obj, opt) {
            var conf = {
                url: url,
                data: JSON.stringify(obj),
                method: "PUT",
                contentType: "application/json"
            }
            if (opt) {
                conf = _.assign(conf, opt)
            }
            return $.ajax(conf)
        },
        delete: function(url, obj) {
            return $.ajax({
                url: url,
                data: JSON.stringify(obj),
                method: "DELETE",
                contentType: "application/json"
            })
        }
    }
    return http;
})
