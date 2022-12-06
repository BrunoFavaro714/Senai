const express = require('express');
const routes = express.Router();
const middle = require('../middleware/middleware.js');

const comentarios = require('../controllers/comentarios.js');

routes.get('/reenyedito/get/comentarios', comentarios.getComentarios);
routes.post('/reenyedito/post/comentarios', comentarios.postCometarios);
routes.delete('/reenyedito/delete/comentarios', middle.validarUserAdimin, comentarios.delComentarios);

module.exports = routes;