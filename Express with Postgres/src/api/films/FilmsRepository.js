const model = require("./FilmsModel"); /* importando o modelo "Film" */

/* criando e exportando a função getAll (dá um findAll no modelo Film) */
exports.getAll = function () {
    return model.findAll();
};

/* criando exportando a função getById (busca uma tupla do modelo Film pela chave primária) */
exports.getById = function (id) {
    return model.findByPk(id);
};

/* o metódo .create cria uma nova tupla derivada de um objeto fornecido pelo front-end  */
exports.create = function (obj) {
    return model.create(obj);
};

/* o metódo update recebe dois parâmetros, a atualização da tupla (nesse caso vindo do front) e um where (nesse caso o parâmetro id da requisição */
exports.update = function(obj) {
    model.update(obj, {where: {film_id: obj.film_id}});
};

/* o metódo .destroy deleta uma instância do modelo (tupla) */
exports.delete = function(id) {
    model.destroy({where: {film_id: id}});
};