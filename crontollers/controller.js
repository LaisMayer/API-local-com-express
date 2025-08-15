import dados from '../data/sample.data.js';

export const getAllDados = (req, res) => {
    console.log("Função getDados foi chamada");
    res.json(dados);
};