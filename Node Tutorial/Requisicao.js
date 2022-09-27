// Requisição
var http = require('http');

/* o parâmetro request é um objeto, este possui uma propriedade chamada 'url' que contém toda a url da página, com exceção do domínio */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); /* repare que text pode ser de outro tipo */
  res.write(req.url);
  res.end();
}).listen(8080);