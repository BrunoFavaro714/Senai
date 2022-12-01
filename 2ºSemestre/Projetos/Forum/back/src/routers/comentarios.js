const express = require('express');
const routes = express.Router();

const comentarios = require('../controllers/comentarios.js');

routes.get('/reenyedito/get/comentarios', comentarios.getComentarios);

module.exports = routes;