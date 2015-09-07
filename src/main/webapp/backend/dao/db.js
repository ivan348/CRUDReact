var pool = require("./../connections/pool");
var createExpense = function(data, callback) {
    pool.getConnection(function(err, connection) {
        var query = "INSERT INTO expenses(name, value) VALUES (?,?)";
        connection.query(query, [data.name, data.value], function(err, result) {
            if (!err) {
                console.log("expense created " + data.name);
                data.id = result.insertId;
                callback(data);
            } else {
                console.log(err);
            }
            connection.release();
        });
    });
}
var getExpenses = function(callback) {
    pool.getConnection(function(err, connection) {
        var query = "SELECT * FROM expenses";
        connection.query(query, function(err, rows) {
            if (!err) {
                callback(rows);
                console.log("expense loaded " + rows);
            } else {
                console.log(err);
            }
            connection.release();
        });
    });
}
var editExpense = function(data, callback) {
    pool.getConnection(function(err, connection) {
        var query = "UPDATE expenses SET name=?, value=? WHERE id=?";
        connection.query(query, [data.name, data.value, data.id], function(err, rows) {
            if (!err) {
                console.log("expense edited " + data.name);
            } else {
                console.log(err);
            }
            connection.release();
        });
    });
}
var deleteExpense = function(data, callback) {
    pool.getConnection(function(err, connection) {
    	var query = "DELETE FROM expenses WHERE id=?";
    	connection.query(query, data.id, function(err, rows){
    		if (!err) {
    			console.log("expenses deleted " + data.name);
    		} else {
    			console.log(err);
    		}
    	})
    	connection.release();
    })
}
module.exports = {
    createExpense: createExpense,
    getExpenses: getExpenses,
    editExpense: editExpense,
    deleteExpense: deleteExpense
}
