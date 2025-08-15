import { Router } from "express";
import { getAllDados } from "../crontollers/controller.js";

const rota = Router();

// rota para retornar dados
rota.get('/', getAllDados);

export default rota;