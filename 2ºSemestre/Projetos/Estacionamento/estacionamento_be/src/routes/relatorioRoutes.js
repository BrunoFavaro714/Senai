const express = require('express');
const relatorioRouter = express.Router();

const relatorio = require('../controller/relatorioController.js');

relatorioRouter.get('/estacionamento/relatorio', relatorio.relatorioListar);
relatorioRouter.get('/estacionamento/relatorio/:cpf', relatorio.relatorioListarUm);
relatorioRouter.post('/estacionamento/cadastrar/relatorio', relatorio.relatorioCadastrar);
relatorioRouter.put('/estacionamento/relatorio', relatorio.relatorioAtualizar);

module.exports = relatorioRouter;