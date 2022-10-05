const express = require('express');
const solicitaRouter = express.Router();

const solicitacoes = require('../controller/solicitaController.js');

solicitaRouter.get('/solicitacoes', solicitacoes.solicitacoesListar);
solicitaRouter.get('/solicitacoes/:num_sol', solicitacoes.solicitacaoListar);
solicitaRouter.post('/solicitacoes', solicitacoes.solicitacaoCadastrar);

module.exports = solicitaRouter;