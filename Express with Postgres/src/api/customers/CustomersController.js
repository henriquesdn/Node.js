const router = require('express').Router(); /* express */

const service = require('./CustomersService'); /* importando a camada service */

/* metódo http retornando um getAll no modelo Customer */
router.get('/', (req, res) => {
    service.getAll().then((customers) => {
        res.send(customers);
    });
});

module.exports = router; 