const express = require("express"); /* imprtando o express */
const bodyParser = require("body-parser"); /* Por padrão o body de uma requisição do Node vem como undefined, o body-parser é capaz de converter essas requisições para outros formatos, como o json por exemplo */

const films = require("./src/api/films/FilmsController"); /* importando o módulo films */
const customers = require("./src/api/customers/CustomersController");

const app = express(); /* declarando o express dentro de uma constante */
const port = 3000;

/* a resposta para o metódo get na rota principal é uma string */
app.get("/", (req, res) => {
    res.send("Rota Principal");
});

app.use(bodyParser.json()); /* body-parser convertendo o body das requisições do express para json */

app.use("/films", films); /* rota "/films" retorna o módulo films  */
app.use("/customers", customers);

app.listen(port, () => {
    console.log(`Este app está sendo ouvido na porta ${port}`);
});