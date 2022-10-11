const express = require('express');
const deleteRoutes = express.Router();

const estacionamento = require('../controller/deleteController.js');

deleteRoutes.delete('/estacionamento/delete/cadastro', estacionamento.cadastro);
deleteRoutes.delete('/estacionamento/delete/vaga', estacionamento.vaga);

module.exports = deleteRoutes;