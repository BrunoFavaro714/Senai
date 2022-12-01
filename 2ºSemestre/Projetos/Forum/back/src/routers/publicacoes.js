const express = require('express');
const routes = express.Router();

const publicacoes = require('../controllers/publicacoes.js');

routes.get('/reenyedito/get/publicacoes', publicacoes.getPublic);

module.exports = routes;