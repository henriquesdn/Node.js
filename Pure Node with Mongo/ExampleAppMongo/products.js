var mongo = require("mongodb");
var MongoClient = mongo.MongoClient
var url = "mongodb://localhost:27017/";
var products;

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("banco_do_node");

    dbo
        .collection("products")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            products = JSON.stringify(result);
            
            db.close();
        })
})

exports.getProducts = function () {
    return products;
}