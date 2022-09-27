const Sequelize = require('sequelize'); /* sequelize */
const sequelize = require('../../database/sequelize'); /* conexão com o banco de dados */

/* Os modelos são a essência do Sequelize. Um modelo é uma abstração que representa uma tabela em seu banco de dados. Em Sequelize, é uma classe que estende Model .

O modelo informa ao Sequelize várias coisas sobre a entidade que ele representa, como o nome da tabela no banco de dados e quais colunas ela possui.

Podemos definir o modelo que represnetará uma tabela usamos o metódo .define("nome_da_tabela", {definição}) */
const Customer = sequelize.define("customer", {
    customer_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: Sequelize.STRING},
    last_name: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    address_id: {type: Sequelize.STRING},
    activebool: {type: Sequelize.STRING},
    create_date: {type: Sequelize.STRING},
    last_update: {type: Sequelize.STRING},
    replacement_cost: {type: Sequelize.STRING},
    active: {type: Sequelize.STRING},
});

module.exports = Customer; /* exportando o modelo "Customer" */