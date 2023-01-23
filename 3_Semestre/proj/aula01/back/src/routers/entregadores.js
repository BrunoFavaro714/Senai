const express = require('express');
const Routes = express.Router();

const chaparia = require('../controllers/entregadores.js');

Routes.get('/entregadores', chaparia.entregadores);

module.exports = Routes;