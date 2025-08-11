import exemploDados from '../dados/exemploDados.js';

export const getAllDados = (req, res) => {
    console.log("Função getDados foi chamada");
    res.json(exemploDados);
};