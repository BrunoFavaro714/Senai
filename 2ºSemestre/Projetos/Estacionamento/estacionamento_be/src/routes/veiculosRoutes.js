const express = require('express');
const veiculosRouter = express.Router();

const veiculos = require('../controller/veiculosController.js');

veiculosRouter.get('/estacionamento/veiculos', veiculos.veiculosListar);
veiculosRouter.get('/estacionamento/veiculos/:cpf', veiculos.veiculoListar);
veiculosRouter.post('/estacionamento/cadastrar/veiculo', veiculos.veiculoCadastrar);

module.exports = veiculosRouter;