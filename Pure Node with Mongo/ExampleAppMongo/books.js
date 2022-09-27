var mongo = require("mongodb");
var MongoClient = mongo.MongoClient
var url = "mongodb://localhost:27017/";
var books;

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("banco_do_node");

    dbo
        .collection("books")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            books = JSON.stringify(result);
            
            db.close();
        })
})

exports.getBooks = function () {
    return books;
}