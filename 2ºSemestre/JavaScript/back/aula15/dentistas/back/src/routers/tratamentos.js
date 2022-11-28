const express = require('express');
const Routes = express.Router();

const dentista = require('../controllers/tratamentos.js');

Routes.get('/tratamentos/read/', dentista.getTratamentos);
Routes.post('/tratamentos/create/', dentista.postTratamentos);
Routes.put('/tratamentos/update/', dentista.putTratamentos);
Routes.delete('/tratamentos/delete/', dentista.deleteTratamentos);

module.exports = Routes;