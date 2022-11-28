const express = require('express');
const Routes = express.Router();

const dentista = require('../controllers/consultas.js');

Routes.get('/consultas/read/', dentista.consultas);

module.exports = Routes;