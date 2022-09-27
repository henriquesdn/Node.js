const Sequelize = require("sequelize"); /* sequelize */
const sequelize = require("../../database/sequelize"); /* conexão com o banco de dados */

/* Os modelos são a essência do Sequelize. Um modelo é uma abstração que representa uma tabela em seu banco de dados. Em Sequelize, é uma classe que estende Model .

O modelo informa ao Sequelize várias coisas sobre a entidade que ele representa, como o nome da tabela no banco de dados e quais colunas ela possui.

Podemos definir o modelo que represnetará uma tabela usamos o metódo .define("nome_da_tabela", {definição}) */
const Film = sequelize.define("film", {
    film_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    release_year: {type: Sequelize.STRING},
    language_id: {type: Sequelize.STRING},
    rental_duration: {type: Sequelize.STRING},
    rental_rate: {type: Sequelize.STRING},
    length: {type: Sequelize.STRING},
    replacement_cost: {type: Sequelize.STRING},
    rating: {type: Sequelize.STRING},
    last_update: {type: Sequelize.STRING},
    special_features: {type: Sequelize.ARRAY(Sequelize.STRING)},
    fulltext: {type: Sequelize.STRING},
});

module.exports = Film; /* exportando o modelo "Film" */