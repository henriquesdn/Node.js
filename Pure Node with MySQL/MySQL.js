/* para instalar o módulo que permite a manipulação de Bancos de Dados MySQL, no prompt: npm install -g mysql */

// Criando conexão com o MySQL
var mysql = require('mysql');

/* abre a conexão com o MySQL, esses dados podem ser consultados em uma interface gráfica como o DBeaver */
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

/* função executada a partir da conexão */
con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");
});

// Criando banco de dados - CREATE DATABASE
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");

	/* o metódo .query é utilizado para enviar comandos de SQL para o banco de dados */
	con.query("CREATE DATABASE meu_bd", function (err, result) {
		if (err) throw err;
		console.log("Banco de dados criado com sucesso!");
	});
});

// Criando tabela - CREATE TABLE
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd" /* a partir de agora iremos especificar o banco com que estamos trabalhando */
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");

	/* o comando SQL dentro de uma variável ajuda a deixar o código mais legível */
	var sql = "CREATE TABLE clientes (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), endereco VARCHAR(255))";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela criada com sucesso!");
	});
});

// Inserindo dados - INSERT

/* Inserção de uma única linha */
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");

	var sql = "INSERT INTO clientes (nome, endereco) VALUES ('Pedeboi Inc', 'Diogo 2')";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tupla inserida, ID: " + result.insertId); /* .insertId retorna o id da tupla inserida */
	});
});

/* Inserção de várias linhas */
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");

	/* para inserir múltiplas tuplas ao mesmo tempo devemos criar uma matriz com os valores que iremos inserir e usar uma interrogação no comando SQL, onde normalmente ficariam os valores */
	var sql = "INSERT INTO clientes (nome, endereco) VALUES ?";
	var values = [
		['John', 'Highway 71'],
		['Peter', 'Lowstreet 4'],
		['Amy', 'Apple st 652'],
		['Hannah', 'Mountain 21'],
		['Michael', 'Valley 345'],
		['Sandy', 'Ocean blvd 2'],
		['Betty', 'Green Grass 1'],
		['Richard', 'Sky st 331'],
		['Susan', 'One way 98'],
		['Vicky', 'Yellow Garden 2'],
		['Ben', 'Park Lane 38'],
		['William', 'Central st 954'],
		['Chuck', 'Main Road 989'],
		['Viola', 'Sideway 1633']
	];
	/* é necessário passar a matriz como parâmetro na query também */
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Número de tuplas inseridas: " + result.affectedRows); /* .affectedRows retorna o número de linhas afetadas */
	});
});

// Consultando Dados - SELECT
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "SELECT nome, endereco FROM clientes";

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

/* retornar um campo especifico em um índice especifico */
console.log(result[3].endereco);

/* retornar detalhes dos campos */
console.log(fields);

// WHERE
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "SELECT nome, endereco FROM clientes WHERE endereco = 'Diogo 2'";

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

/* WHERE com LIKE */
sql = "SELECT nome, endereco FROM clientes WHERE endereco = 'D%'";

/* metódo mysql.escape() */
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	var adr = 'Mountain 21';
	var sql = 'SELECT * FROM clientes WHERE endereco = ' + mysql.escape(adr);
	/* o metódo mysql.escape() serve para evitar injeções de SQL quando algum valor de consulta é uma variável fornecida pelo usuário */

	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});

// ORDER BY e LIMIT
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "SELECT * FROM clientes LIMIT 2, 5"; /* a consulta pulará os primeiros 2 primeiros resultados e retornará no máximo 5, caso o LIMIT recebesse apenas um número este seria o número máximo de retornos */

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

// Deletando dados - DELETE
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "DELETE FROM clientes WHERE endereco = 'Sky st 331'";
	/* irá apagar a tupla onde o endereco for 'Sky st 331', sempre lembrar de usar WHERE ao usar DELETE */

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

// Excluindo tabelas - DROP TABLE
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "DROP TABLE IF EXISTS pedidos";
	/* irá apagar a tabela "pedidos" apenas se ela existir, lembrar de nunca deixar o estagiário usar drop table */

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

// Atualizando dados - UPDATE
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "UPDATE clientes SET endereco = 'Canyon 123' WHERE endereco = 'Valley 345'";
	/* update acontecerá nas tuplas onde o endereco for 'Valley 345' */

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

// JOIN
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "meu_bd"
});

con.connect(function(err) {
	if (err) throw err;
	var sql = "SELECT usuario.nome AS usuario, produto.nome AS favorito FROM usuario JOIN produto ON usuario.favorite_product = produto.id";
	/* duas tabelas sendo relacionadas pelos atributos favorite_product da tabela "usuario" e id da tabela "produto" */

	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});