const express = require('express');
const routes = express.Router();

const publicacoes = require('../controllers/publicacoes.js');

routes.get('/reenyedito/get/publicacoes', publicacoes.getPublic);
routes.post('/reenyedito/post/publicacoes', publicacoes.postPublic);
routes.delete('/reenyedito/delete/publicacoes/:id', publicacoes.delPublic);

module.exports = routes;