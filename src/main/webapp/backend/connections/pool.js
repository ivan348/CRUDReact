var mysql = require("mysql");
var dbconfig = require("../config/dbconfig");
var pool = mysql.createPool(dbconfig);
var getConnection = function(callback) {
    return pool.getConnection(callback);
}

module.exports = {
    getConnection: getConnection
}
