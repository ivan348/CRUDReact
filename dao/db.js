var pool = require("./../connections/pool");
var createTables = function() {
    pool.getConnection(function(err, connection) {
        var query = "CREATE TABLE IF NOT EXISTS expenses(id INTEGER PRIMARY KEY AUTO_INCREMENT, name TEXT, value FLOAT(10,2), type TEXT, currency TEXT, category TEXT)";
        connection.query(query, function(err, result) {
            if(!err){

            } else {
                console.log(err);
            }
            connection.release();
        })
    })
}
var createExpense = function(data, callback) {
    pool.getConnection(function(err, connection) {
        var query = "INSERT INTO expenses(name, value, type, currency, category) VALUES (?,?,?,?,?)";
        connection.query(query, [data.name, data.value, data.type, data.currency, data.category], function(err, result) {
            if (!err) {
                console.log("expense created " + data.name);
                data.id = result.insertId;
                callback(data);
            } else {
                console.log(err);
            }
            connection.release();
        })
    })
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
        })
    })
}
var editExpense = function(data, callback) {
    pool.getConnection(function(err, connection) {
        var query = "UPDATE expenses SET name=?, value=?, type=?, currency=?, category=? WHERE id=?";
        connection.query(query, [data.name, data.value, data.type, data.currency, data.category, data.id], function(err, rows) {
            if (!err) {
                console.log("expense edited " + data.name);
            } else {
                console.log(err);
            }
            connection.release();
        })
    })
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
var getExpensesByCurrency = function(currency, callback) {
    pool.getConnection(function(err, connection) {
        var query = "SELECT * FROM expenses WHERE currency=?";
        connection.query(query, currency, function(err, rows) {
            if (!err) {
                callback(rows);
            } else {
                console.log(err);
            }
            connection.release();
        })
    })
}
module.exports = {
    createTables: createTables,
    createExpense: createExpense,
    getExpenses: getExpenses,
    editExpense: editExpense,
    deleteExpense: deleteExpense,
    getExpensesByCurrency: getExpensesByCurrency
}
