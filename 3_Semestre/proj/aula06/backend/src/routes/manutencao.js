const express = require('express');
const Router = express.Router();

const manutencao = require('../controller/manutencao');

Router.post('/post/manutencao', manutencao.create);
Router.get('/get/manutencao', manutencao.readAll);

module.exports = Router;