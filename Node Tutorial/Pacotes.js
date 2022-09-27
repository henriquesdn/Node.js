// NPM - Instalação de Pacotes

/* no prompt: npm install upper-case */

var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!")); /* hello world agora será escrito todo com letras maiúsculas */
  res.end();
}).listen(8080);