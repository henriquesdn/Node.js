/* para instalar o módulo que permite a manipulação de Bancos de Dados MongoDB, no prompt: npm install -g mongodb */

// Criando um banco de dados
var MongoClient = require('mongodb').MongoClient; /* objeto MongoClient */
var url = "mongodb://localhost:27017/meubanco"; /* url de conexão (enredeço ip + nome do banco) */

/* abrir conexão com banco de dados (cria o banco caso ele não exista) */
MongoClient.connect(url, function(err, db) { /* recebe a url de conexão e uma função como parâmetros */
	if (err) throw err; /* se err = true lança err */
	console.log("Banco de Dados criado com sucesso!");
	db.close(); /* fecha conexão com o banco de dados */
});

// Criando coleção
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("meubanco"); /* variável recebendo o banco de dados */

	/* criando uma coleção chamada "clientes" com o createCollection */
	dbo.createCollection("clientes", function(err, res) {
		if (err) throw err;
		console.log("Coleção criada com sucesso!");
		db.close();
	});
});

// Inserindo dados

/* insertOne */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("meubanco");
	var meuobjeto = {nome: "Company Inc", endereco: "Highway 37"}; /* variável com documento que será inserido */

	dbo.collection("clientes")
	.insertOne(meuobjeto, function(err, res) {
		if (err) throw err;
		console.log("1 documento inserido");
		db.close();
	});
});

/* insertMany */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("meubanco");

  /* variável com array de documentos que serão inseridos */
	var meuobjeto = [
		{ nome: 'John', endereco: 'Highway 71'},
		{ nome: 'Peter', endereco: 'Lowstreet 4'},
		{ nome: 'Amy', endereco: 'Apple st 652'},
		{ nome: 'Hannah', endereco: 'Mountain 21'},
		{ nome: 'Michael', endereco: 'Valley 345'},
		{ nome: 'Sandy', endereco: 'Ocean blvd 2'},
		{ nome: 'Betty', endereco: 'Green Grass 1'},
		{ nome: 'Richard', endereco: 'Sky st 331'},
		{ nome: 'Susan', endereco: 'One way 98'},
		{ nome: 'Vicky', endereco: 'Yellow Garden 2'},
		{ nome: 'Ben', endereco: 'Park Lane 38'},
		{ nome: 'William', endereco: 'Central st 954'},
		{ nome: 'Chuck', endereco: 'Main Road 989'},
		{ nome: 'Viola', endereco: 'Sideway 1633'}
	];

	dbo.collection("clientes")
	.insertMany(meuobjeto, function(err, res) {
		if (err) throw err;
		console.log("Número de documentos inseridos: " + res.insertedCount);
		db.close();
	});
});

// Consultando dados
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("meubanco");
	var query = {endereco: /^S/}; /* parâmetro de busca, buscando endereços começados com a letra S */
	var mysort = {nome: 1}; /* parâmetro de ordenação ordenando pelo nome, nome: -1 traria ordem decrescente */

	dbo.collection("clientes")
		.find(query, {projection: {nome: true}}) /* metódo de busca, findOne retornaria apenas 1 documento */
		.sort(mysort) /* metódo de ordenação */
		.limit(3) /* limita a quantidade de documentos retornados */
		.toArray(function(err, result) { /* retorno em array */
			if (err) throw err;
			console.log(result);
			db.close();
		});
});

// Delentado dados

/* deleteOne */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("meubanco");
	var myquery = {endereco: 'Mountain 21'};

	dbo.collection("clientes")
	.deleteOne(myquery, function(err, obj) { /* método de exclusão excluindo o documento retornado pelo parâmetro myquery */
		if (err) throw err;
		console.log("1 documento deletado");
		db.close();
	});
});

/* deleteMany */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("meubanco");
	var myquery = {endereco: /^O/};

	dbo.collection("clientes")
	.deleteMany(myquery, function(err, obj) { /* metódo de exclusão excluindo todos os documentos retornados por myquery */
		if (err) throw err;
		console.log(obj.result.n + " documentos deletados"); /* imprime o número de documentos deletados no console */
		db.close();
	});
});

// Deletando coleções
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");

  /* excluindo a coleção clientes com o método dropCollection" */
	dbo.dropCollection("clientes", function(err, delOK) {
		if (err) throw err;
		if (delOK) console.log("Coleção deletada com sucesso!");
		db.close();
	});
});

// Update em um documento
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("meubanco");
	var myquery = {endereco: "Valley 345"}; /* parâmetro de seleção do documento */
	var newvalues = {$set: {nome: "Mickey", endereco: "Canyon 123"}}; /* novos valores para o documento */

	dbo.collection("clientes")
	.updateOne(myquery, newvalues, function(err, res) { /* updateMany atualizaria vários documentos, não apenas 1 */
		if (err) throw err;
		console.log("1 documento atualizado");
		db.close();
	});
});

// Join de documentos

/* o metódo .aggregate([{$lookup}]) possibilita a junção de dois documentos através da seguinte sintaxe: */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("meubanco");

	dbo.collection('pedidos').aggregate([ // agregar a pedidos
	{$lookup:
		{
			from: 'produtos', // tudo de produtos
			localField: 'product_id', // quando o valor deste campo
			foreignField: '_id', // for igual a este
			as: 'detalhes_do_pedido'
		}
	}
	]).toArray(function(err, res) {
	if (err) throw err;
	console.log(JSON.stringify(res)); /* imprime JSON em formato string, 'pedidos' agora possui um novo campo chamado detalhes_do_pedido cujo o valor é um array com todos os atributos originais de 'produtos' */
	db.close();
	});
});
