const repository = require("./OfficesRepository"); /* importando a camada repository */

/* passando getAll para frente */
exports.getAll = function () {
    return repository.getAll();
};

exports.getById = function (id) {
    return repository.getById(id);
};

exports.create = function (obj) {
    return repository.create(obj);
};

exports.update = function (obj) {
    return repository.update(obj);
};

exports.delete = function (id) {
    return repository.delete(id);
};