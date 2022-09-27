// Rotas

/* para trabalhar com express não precisamos de switch para trabalhar com diferentes rotas, podemos simplesmente colocar cada rota dentro de uma função get */
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Rota principal');
});

app.get('/usuarios', (req, res) => {
    res.send('Estou listando todos os usuarios');
});

app.listen(port, () => {
    console.log(`Este app está sendo ouvido na porta ${port}`);
});
