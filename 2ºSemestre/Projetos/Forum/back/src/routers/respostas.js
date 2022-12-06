const express = require('express');
const routes = express.Router();
const middle = require('../middleware/middleware.js');

const respostas = require('../controllers/respostas.js');

routes.get('/reenyedito/get/respostas', respostas.getRespostas);
routes.post('/reenyedito/post/respostas', respostas.postRespostas);
routes.delete('/reenyedito/delete/respostas', middle.validarUserAdimin, respostas.delRespostas);

module.exports = routes;