const express = require('express');
const Router = express.Router();

const cursados = require('../controllers/cursados');

Router.get('/cursados/get', cursados.getCursados);
Router.get('/cursos/get/:id_aluno', cursados.getCursadosFilt)
Router.post('/cursados/post', cursados.postCursados);

module.exports = Router;