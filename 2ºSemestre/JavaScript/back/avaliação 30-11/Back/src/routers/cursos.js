const express = require('express');
const Router = express.Router();

const cursos = require('../controllers/cursos');

Router.get('/cursos/get', cursos.getCursos);
Router.post('/cursos/post', cursos.postCurso);
Router.delete('/cursos/del/:id', cursos.delCurso);

module.exports = Router;