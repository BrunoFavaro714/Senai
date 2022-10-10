const express = require('express');
const deleteRoutes = express.Router();

const solicitacoes = require('../controllers/deleteController.js');

deleteRoutes.delete('/solicitacoes/delete/depart/:cod_depart', solicitacoes.depart);

module.exports = deleteRoutes;