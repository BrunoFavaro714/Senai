const express = require('express');
const routes = express.Router();

const usuario = require('../controllers/usuario.js');

routes.get('/reenyedito/get/usuario', usuario.getUsuario);
routes.post('/reenyedito/post/usuario', usuario.postUsuario);
routes.delete('/reenyedito/delete/usuario/:id', usuario.delUsuario);

module.exports = routes;