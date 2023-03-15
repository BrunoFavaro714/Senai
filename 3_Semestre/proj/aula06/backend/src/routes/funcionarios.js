const express = require('express');
const Router = express.Router();
const middleware = require('../middleware/middleware');

const funcionarios = require('../controller/funcionarios');

Router.post('/login', funcionarios.login);
Router.post("/post/funcionario", funcionarios.create);
Router.get('/get/funcionarios', funcionarios.readAll);
Router.put('/put/funcionario', funcionarios.update);
Router.delete('/del/funcionario/:id', funcionarios.del);

module.exports = Router