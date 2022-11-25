const express = require('express');
const Routes = express.Router();

const dentista = require('../controllers/profissionais.js');

Routes.get('/profissionais/read/', dentista.profissionais);
Routes.get('/tratamentos/profissional/:id', dentista.vw_completa);

module.exports = Routes;