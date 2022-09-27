var http = require("http");
var customers = require("./routes/customers");
var offices = require("./routes/offices");
var products = require("./routes/products");

http.createServer(function manipulateServer(req, res) {
    res.writeHead(200, {"Content-Type" : "application/json"});
    switch (req.url) {
        case "/customers":
            res.end(customers.getCustomers());
            break;
        case "/offices":
            res.end(offices.getOffices());
            break;
        case "/products":
            res.end(products.getProducts());
            break;
        default:
            res.end("rota nao encontrada");
            break;
    }

}).listen(4001, ()=> console.log("Servidor rodando na porta 4001"))