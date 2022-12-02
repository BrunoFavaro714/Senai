const express = require('express');
const Router = express.Router();
const middleware = require('../middleware/middleware');

const usuario = require('../controllers/ususario');

Router.post('/login', usuario.login);
Router.delete('/delete/:id', middleware.validaAcesso,usuario.remover);

module.exports = Router