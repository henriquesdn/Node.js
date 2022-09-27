const express = require("express"); /* express */
const router = express.Router(); /* o metódo Router() é um gerenciador de rotas do node */

const service = require("./PaymentsService"); /* importando a camada service */

/* get = R */
router.get("/", (req, res) => {
    service.getAll().then( // o metódo .then é utilizado para trabalhar com tarefas assincronas
        (resolve) => { 
            res.send(resolve);
        },
        () => {
            res.send("reject");
        }
    );
});

/* o express se refere a parâmetros através de dois pontos : */
router.get("/:id", (req, res) => {
    service.getById(req.params.id).then( // getById recebendo o parâmetro id da requisição (assim como getAll, o getById deve ser criado nas demais camadas para que possa chegar aqui)
        (resolve) => { 
            res.send(resolve);
        }
    );
});

/* post = C */
router.post("/", (req, res) => {
    service.create(req.body);
    res.send("Filme criado"); // erros não estão sendo tratados nesse casso 
});

/* put = U */
router.put("/", (req, res) => {
    service.update(req.body);
    res.send("Filme atualizado");
});

/* delete = D */
router.delete("/:id", (req, res) => {
    service.delete(req.params.id);
    res.send("Filme deletado");
});

module.exports = router;