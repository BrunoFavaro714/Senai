const express = require('express');
const Routes = express.Router();

const setores = require('../controllers/setores');

Routes.get('/setores', setores.read);
Routes.post('/setor', setores.create);

module.exports = Routes;

