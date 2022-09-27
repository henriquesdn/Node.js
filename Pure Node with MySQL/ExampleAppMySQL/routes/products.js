var mysql = require('mysql');
var products;

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "classicmodels"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "SELECT * FROM products";

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		products = JSON.stringify(result);
	});
});

exports.getProducts = function () {
    return products;
}