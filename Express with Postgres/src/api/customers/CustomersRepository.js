const model = require('./CustomersModel'); /* importando o modelo "Customer" */

/* criando e exportando a função getAll (dá um findAll no modelo Customer) */
exports.getAll = function () {
    return model.findAll();
};