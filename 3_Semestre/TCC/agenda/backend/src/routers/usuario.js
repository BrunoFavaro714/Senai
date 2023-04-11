const express = require('express');
const Router = express.Router();

const usuario = require('../controller/usuario');

Router.post('/post/usuario', usuario.Create);
Router.get('/get/usuario', usuario.Read);
Router.put('/put/usuario/:id', usuario.Update);
Router.delete('/delete/usuario/:id', usuario.Delete);

module.exports = Router;