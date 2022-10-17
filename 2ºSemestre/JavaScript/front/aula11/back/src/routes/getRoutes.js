const express = require('express');
const getRoutes = express.Router();

const solicitacoes = require('../controllers/getController.js');

getRoutes.get('/solicitacoes/get/geral', solicitacoes.vw_geral);
getRoutes.get('/solicitacoes/get/produtos', solicitacoes.produtos);
getRoutes.get('/solicitacoes/get/produtos/:data', solicitacoes.produtosData);
getRoutes.get('/solicitacoes/get/depart/:prod', solicitacoes.vw_depart);
getRoutes.get('/solicitacoes/get/depart', solicitacoes.depart)
getRoutes.get('/solicitacoes/get/func_solic', solicitacoes.vw_func_solic);

module.exports = getRoutes;