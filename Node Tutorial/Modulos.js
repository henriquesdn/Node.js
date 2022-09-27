// Módulos Node.js
  
/* usando nosso módulo personalizado no Node.js */
var http = require('http');
var dt = require('./src/DateTime');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Data e Hora:" + dt.myDateTime()); /* escreve uma resposta para o cliente */
    res.end();
}).listen(8080);