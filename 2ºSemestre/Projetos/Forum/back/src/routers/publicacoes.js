const express = require('express');
const routes = express.Router();
const middle = require('../middleware/middleware.js');

const publicacoes = require('../controllers/publicacoes.js');

routes.get('/reenyedito/get/publicacoes', publicacoes.getPublic);
routes.post('/reenyedito/post/publicacoes', publicacoes.postPublic);
routes.delete('/reenyedito/delete/publicacoes', middle.validarUserAdimin, publicacoes.delPublic);

module.exports = routes;