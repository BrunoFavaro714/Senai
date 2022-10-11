const express = require('express');
const postRoutes = express.Router();

const estacionamento = require('../controller/postController.js');

postRoutes.post('/estacionamento/post/cadastro', estacionamento.cadastro);
postRoutes.post('/estacionamento/post/vaga', estacionamento.vaga);

module.exports = postRoutes;