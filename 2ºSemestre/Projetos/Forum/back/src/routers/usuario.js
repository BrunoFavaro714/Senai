const express = require('express');
const routes = express.Router();

const usuario = require('../controllers/usuario.js');

routes.get('/reenyedito/get/usuario', usuario.getUsuario);

module.exports = routes;