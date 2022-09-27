const model = require("./PaymentsModel"); /* importando o modelo "Payment" */

/* criando e exportando a função getAll (dá um findAll no modelo Payment) */
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
    model.update(obj, {where: {checkNumber: obj.checkNumber}});
};

/* o metódo .destroy deleta uma instância do modelo (tupla) */
exports.delete = function(id) {
    model.destroy({where: {checkNumber: id}});
};