const express = require('express');
const clientesRouter = express.Router();

const clientes = require('../controller/clientesController.js');

clientesRouter.get('/estacionamento/clientes', clientes.clientesListar);
clientesRouter.get('/estacionamento/clientes/:cpf', clientes.clienteListar);
clientesRouter.post('/estacionamento/cadastrar/cliente', clientes.clienteCadastrar);

module.exports = clientesRouter;