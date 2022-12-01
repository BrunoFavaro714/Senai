const express = require('express');
const routes = express.Router();

const categorias = require('../controllers/categorias.js');

routes.get('/reenyedito/get/categorias', categorias.getCategorias);
routes.post('/reenyedito/post/categorias', categorias.postCategorias);
routes.delete('/reenyedito/delete/categorias/:id', categorias.delCategorias);

module.exports = routes;