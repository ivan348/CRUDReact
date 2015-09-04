var mysql = require("mysql");
var pool = mysql.createPool({
    connectionLimit: 10,
    debug: false,
    host: "localhost",
    user: "root",
    password: "",
    database: "expenses"

});
var getConnection = function(callback) {
    return pool.getConnection(callback);
}

module.exports = {
    getConnection: getConnection
}
