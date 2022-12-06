const express = require('express');
const routes = express.Router();
const middle = require('../middleware/middleware.js');

const categorias = require('../controllers/categorias.js');

routes.get('/reenyedito/get/categorias', categorias.getCategorias);
routes.post('/reenyedito/post/categorias', categorias.postCategorias);
routes.delete('/reenyedito/delete/categorias', middle.validarAdimin, categorias.delCategorias);

module.exports = routes;