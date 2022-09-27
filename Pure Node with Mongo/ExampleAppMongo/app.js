var http = require("http");
var books = require("./books");
var products = require("./products")

http.createServer(function manipulateServer(req, res) {
    switch (req.url) {
        case "/books":
            res.end(books.getBooks());
            break;
        case "/products":
            res.end(products.getProducts());
            break;
        default:
            res.end("rota nao encontrada");
            break;
    }

}).listen(4001, ()=> console.log("Servidor rodando na porta 4001"))