const Sequelize = require("sequelize"); /* sequelize */
const sequelize = require("../../database/sequelize"); /* conexão com o banco de dados */

/* Os modelos são a essência do Sequelize. Um modelo é uma abstração que representa uma tabela em seu banco de dados. Em Sequelize, é uma classe que estende Model .

O modelo informa ao Sequelize várias coisas sobre a entidade que ele representa, como o nome da tabela no banco de dados e quais colunas ela possui.

Podemos definir o modelo que represnetará uma tabela usamos o metódo .define("nome_da_tabela", {definição}) */
const Office = sequelize.define("offices", {
    officeCode: {type: Sequelize.STRING, primaryKey: true, autoIncrement: true},
    city: {type: Sequelize.STRING},
    phone: {type: Sequelize.STRING},
    addressLine1: {type: Sequelize.STRING},
    addressLine2: {type: Sequelize.STRING},
    state: {type: Sequelize.STRING},
    country: {type: Sequelize.STRING},
    postalCode: {type: Sequelize.STRING},
    territory: {type: Sequelize.STRING},
});

module.exports = Office; /* exportando o modelo "Office" */