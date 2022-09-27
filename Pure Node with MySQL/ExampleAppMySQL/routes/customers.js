var mysql = require('mysql');
var customers;

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "classicmodels"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "SELECT * FROM customers";

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		customers = JSON.stringify(result);
	});
});

exports.getCustomers = function () {
    return customers;
}