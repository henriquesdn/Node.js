var mysql = require('mysql');
var offices;

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "classicmodels"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "SELECT * FROM offices";

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		offices = JSON.stringify(result);
	});
});

exports.getOffices = function () {
    return offices;
}