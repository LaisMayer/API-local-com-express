const express = require('express');
const router = express.Router();

const dados = require('../data/sample.data');

router.get('/dados',(req, res) => {
    res.json(dados);
});

router.get('/dados/:id', (rec,res) =>{
    const id = parseInt(rec.params.id);
    const dados = dados.find(p=> p.id === id);
});

module.express = router;
