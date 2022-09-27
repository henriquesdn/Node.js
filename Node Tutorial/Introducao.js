// Tutorial Node.js

/* requisição do módulo http alocando-a dentro de uma variável de mesmo nome */
var http = require('http');

/* método createServer criando um servidor que será ouvido pela porta 8080 e função que será executada quando a porta 8080 for acessada (recebe as variáveis request e response como parâmetro) */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); /* resposta p/ o cabeçalho do arquivo é um código http 200(OK) do tipo text/plain */
  res.end('Hello World!'); /* finaliza a resposta escrevendo Hello World na tela */
}).listen(8080);