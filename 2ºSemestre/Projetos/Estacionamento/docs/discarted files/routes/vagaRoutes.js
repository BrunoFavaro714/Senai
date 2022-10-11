const express = require('express');
const vagasRouter = express.Router();

const vagas = require('../controller/vagasController.js');

vagasRouter.get('/estacionamento/vagas', vagas.vagasListar);
vagasRouter.get('/estacionamento/vagas/:id_vaga', vagas.vagaListar);
vagasRouter.post('/estacionamento/cadastrar/vagas', vagas.vagaCadastrar);
vagasRouter.put('/estacionamento/vagas', vagas.vagaAtualizar);

module.exports = vagasRouter;