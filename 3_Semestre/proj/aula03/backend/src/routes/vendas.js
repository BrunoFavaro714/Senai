const express = require('express');
const Routes = express.Router();

const vendas = require('../controllers/vendas');

Routes.get('/vendas', vendas.read);
Routes.post('/venda', vendas.create);

module.exports = Routes;