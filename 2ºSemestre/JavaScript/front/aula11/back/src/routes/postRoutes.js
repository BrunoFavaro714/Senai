const express = require('express');
const postRoutes = express.Router();

const solicitacoes = require('../controllers/postController.js');

postRoutes.post('/solicitacoes/post/produto', solicitacoes.produto);
postRoutes.post('/solicitacoes/post/depart', solicitacoes.depart);
postRoutes.post('/solicitacoes/post/solic', solicitacoes.solic);

module.exports = postRoutes;