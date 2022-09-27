const express = require('express');

const app = express();
const port = 3000;

/* ao chamar a rota principal a resposta é um hello world */
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Este app está sendo ouvido na porta ${port}`);
});
