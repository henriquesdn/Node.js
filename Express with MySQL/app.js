const express = require("express"); /* imprtando o express */
const bodyParser = require("body-parser"); /* Por padrão o body de uma requisição do Node vem como undefined, o body-parser é capaz de converter essas requisições para outros formatos, como o json por exemplo */

const offices = require("./src/api/offices/OfficesController"); /* importando o módulo offices */
const payments = require("./src/api/payments/PaymentsController");

const app = express(); /* declarando o express dentro de uma constante */
const port = 3000;

/* a resposta para o metódo get na rota principal é uma string */
app.get("/", (req, res) => {
    res.send("Rota Principal");
});

app.use("/offices", offices); /* rota /offices retorna o módulo offices  */
app.use("/payments", payments);

app.use(bodyParser.json()); /* body-parser convertendo as requisições do express para json */

app.listen(port, () => {
    console.log(`Este app está sendo ouvido na porta ${port}`);
});