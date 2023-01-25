const express = require('express');
const Routes = express.Router();

const chaparia = require('../controllers/pedidos.js');

Routes.get('/get/pedidos', chaparia.getPedidos);
Routes.post('/post/pedidos', chaparia.postPedidos);
Routes.put('/put/pedidos', chaparia.putPedidos);
Routes.delete('/delete/pedidos/:id', chaparia.delPedidos);

module.exports = Routes;