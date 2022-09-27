const repository = require('./CustomersRepository'); /* importando a camada repository */

/* passando getAll para frente */
exports.getAll = function () {
    return repository.getAll();
};