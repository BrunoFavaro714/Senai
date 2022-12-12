const express = require('express');
const routes = express.Router();
const middle = require('../middleware/middleware.js');

const comentarios = require('../controllers/comentarios.js');

routes.get('/reenyedito/get/comentarios', comentarios.getComentarios);
routes.get('/reenyedito/get/comentarios/:publi', comentarios.getComentariosFiltrado);
routes.post('/reenyedito/post/comentarios', comentarios.postCometarios);
routes.delete('/reenyedito/delete/comentarios/:id_coment', middle.validarUserAdimin, comentarios.delComentarios);

module.exports = routes;