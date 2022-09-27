const Sequelize = require("sequelize"); /* sequelize */
const sequelize = require("../../database/sequelize"); /* conexão com o banco de dados */

/* Os modelos são a essência do Sequelize. Um modelo é uma abstração que representa uma tabela em seu banco de dados. Em Sequelize, é uma classe que estende Model .

O modelo informa ao Sequelize várias coisas sobre a entidade que ele representa, como o nome da tabela no banco de dados e quais colunas ela possui.

Podemos definir o modelo que represnetará uma tabela usamos o metódo .define("nome_da_tabela", {definição}) */
const Payment = sequelize.define("payments", {
    customerNumber: {type: Sequelize.STRING},
    checkNumber: {type: Sequelize.STRING, primaryKey: true},
    paymentDate: {type: Sequelize.STRING},
    amount: {type: Sequelize.STRING},
});

module.exports = Payment; /* exportando o modelo "Payment" */