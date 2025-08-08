const express = require('express');
const app = express();
const router = require('./router/router');

const porta = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    req.redirect('/api/dados')
});

app.use('/api', router);

app.lista(porta, () => {
    console.log(`O servidor está rodando em : http://localhost:${porta}/api/dados`);
});
