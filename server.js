import dataRoutes from '.router/router.js';
import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

// middçeware para interpretar o json
app.use(express.json());

//rota da api
app.use('/', dataRoutes);

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000");
});
