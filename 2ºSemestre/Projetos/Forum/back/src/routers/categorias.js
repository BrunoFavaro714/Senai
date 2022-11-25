const express = require('express');
const routes = express.Router();

const categorias = require('../controllers/categorias.js');

routes.get('/reenyedito/get/categorias', categorias.getCategorias);

module.exports = routes;