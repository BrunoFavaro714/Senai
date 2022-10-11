const express = require('express');
const getRoutes = express.Router();

const estacionamento = require('../controller/getController.js');

getRoutes.get('/estacionamento/get/vw_completa', estacionamento.vw_completa);
getRoutes.get('/estacionamento/get/vagas', estacionamento.vagas);
getRoutes.get('/estacionamento/get/relatorio', estacionamento.relatorio);

module.exports = getRoutes;