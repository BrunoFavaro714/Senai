const express = require('express');
const routes = express.Router();

const respostas = require('../controllers/respostas.js');

routes.get('/reenyedito/get/respostas', respostas.getRespostas);

module.exports = routes;