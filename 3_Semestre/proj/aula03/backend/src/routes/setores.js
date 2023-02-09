const express = require('express');
const Routes = express.Router();

const setores = require('../controllers/setores');

Routes.get('/setores', setores.readFull);
// Routes.get('/setores/produtos', setores.readProdutos);
Routes.post('/setor', setores.create);

module.exports = Routes;

