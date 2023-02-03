const express = require('express');
const Routes = express.Router();

const detalhes = require('../controllers/detalhes');

Routes.get('/detalhes', detalhes.read);
Routes.post('/detalhe', detalhes.create);
Routes.post('/detalhe/many', detalhes.createMultiple);

module.exports = Routes;