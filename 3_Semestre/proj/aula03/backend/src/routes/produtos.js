const express = require('express');
const Routes = express.Router();

const produtos = require('../controllers/produtos');

Routes.get('/produtos', produtos.read);
Routes.post('/produto', produtos.create);

module.exports = Routes;