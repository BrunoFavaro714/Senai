const express = require('express');
const Router = express.Router();

const alunos = require('../controllers/alunos');

Router.get('/alunos/get', alunos.getAlunos);
Router.get('/aluno/full', alunos.getVw_completa);
Router.post('/alunos/post', alunos.postAluno);
Router.delete('/alunos/del/:id', alunos.delAluno);

module.exports = Router;