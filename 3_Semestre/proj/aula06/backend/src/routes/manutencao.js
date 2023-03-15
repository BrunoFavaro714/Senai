const express = require('express');
const Router = express.Router();

const manutencao = require('../controller/manutencao');

Router.post('/post/manutencao', manutencao.create);
Router.get('/get/manutencao', manutencao.readAll);
Router.put('/put/manutencao/:id', manutencao.update);

module.exports = Router;