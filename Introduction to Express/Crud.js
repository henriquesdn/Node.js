// CRUD
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Rota Principal');
});

/* digamos que o metódo get é o R - read de um CRUD */
app.get('/usuario', (req, res) => {
    res.send('Estou listando todos os usuarios');
});

/* C - create */
app.post('/usuario', (req, res) => {
    res.send('Estou criando um usuario');
});

/* U - update */
app.put('/usuario', (req, res) => {
    res.send('Estou alterando um usuario');
});

/* D - delete */
app.delete('/usuario', (req, res) => {
    res.send('Estou deletando um usuario');
});

app.listen(port, () => {
    console.log(`Este app está sendo ouvido na porta ${port}`);
});
