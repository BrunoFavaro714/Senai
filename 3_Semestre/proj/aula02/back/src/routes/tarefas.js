const express = require('express');
const Router = express.Router();

const tarefas = require('../controllers/tarefas.js');

Router.get('/get/tarefas', tarefas.getTarefas);
Router.get('/get/tarefas/abertas', tarefas.getTarefasAbertas);
Router.get('/get/tarefas/finalis', tarefas.getTarefasFinalis);
Router.get('/get/tarefas/cancel', tarefas.getTarefasCancel);
Router.post('/post/tarefas', tarefas.postTarefas);
Router.put('/put/tarefas/finalis/:id', tarefas.putTarefasFinalis);
Router.put('/put/tarefas/cancel/:id', tarefas.putTarefasCancel);

module.exports = Router;