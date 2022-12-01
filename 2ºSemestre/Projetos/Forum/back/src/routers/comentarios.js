const express = require('express');
const routes = express.Router();

const comentarios = require('../controllers/comentarios.js');

routes.get('/reenyedito/get/comentarios', comentarios.getComentarios);
routes.post('/reenyedito/post/comentarios', comentarios.postCometarios);
routes.delete('/reenyedito/delete/comentarios/:id', comentarios.delComentarios);

module.exports = routes;