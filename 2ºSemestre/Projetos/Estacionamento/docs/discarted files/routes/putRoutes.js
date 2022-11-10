const express = require('express');
const putRoutes = express.Router();

const estacionamento = require('../controller/putController.js');

putRoutes.get('/estacionamento/put/vagas', estacionamento.vagas);

module.exports = putRoutes;