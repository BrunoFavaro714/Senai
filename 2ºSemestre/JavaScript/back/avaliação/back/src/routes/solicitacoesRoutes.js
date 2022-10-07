const express = require('express');
const solicitacoesRouter = express.Router();

const solicitacoes = require('../controllers/solicitacoesController.js');


solicitacoesRouter.get('/solicitacoes/listar/solicitacoes', solicitacoes.viewSoli);
solicitacoesRouter.get('/solicitacoes/listar/depart', solicitacoes.listDepart);
solicitacoesRouter.get('/solicitacoes/listar/solicitacoes/data', solicitacoes.listSoliData);
solicitacoesRouter.get('/solicitacoes/listar/totalPerFunc', solicitacoes.listFuncSolis);
solicitacoesRouter.get('/solicitacoes/listar/produtos', solicitacoes.listProd);

solicitacoesRouter.post('/solicitacoes/cadastrar/produto', solicitacoes.cadProd);
solicitacoesRouter.post('/solicitacoes/cadastrar/depart', solicitacoes.cadDepart);
solicitacoesRouter.post('/solicitacoes/cadastrar/solicitacao', solicitacoes.cadSoli);

solicitacoesRouter.delete('/solicitacoes/excluir/depart', solicitacoes.deletDepart);

module.exports = solicitacoesRouter;