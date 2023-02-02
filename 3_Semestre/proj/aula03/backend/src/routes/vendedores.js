const express = require('express');
const Routes = express.Router();

const vendedores = require('../controllers/vendedores');

Routes.get('/vendedores', vendedores.read);
Routes.post('/vendedor', vendedores.create);

module.exports = Routes;