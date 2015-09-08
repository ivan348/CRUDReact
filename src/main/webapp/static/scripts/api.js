define(function(require) {
    var $ = require("jquery");
    var http = {
        get: function(url) {
            return $.get(url);
        },
        post: function(url, obj) {
            return $.post(url, obj);
        },
        put: function(url, obj) {
            return $.ajax({
                url: url,
                data: JSON.stringify(obj),
                method: "PUT",
                contentType: "application/json"
            })
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
