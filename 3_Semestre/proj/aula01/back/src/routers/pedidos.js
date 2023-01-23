const express = require('express');
const Routes = express.Router();

const chaparia = require('../controllers/pedidos.js');

Routes.get('/pedidos', chaparia.pedidos);

module.exports = Routes;