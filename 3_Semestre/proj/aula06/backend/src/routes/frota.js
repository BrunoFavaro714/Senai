const express = require('express');
const Router = express.Router();

const frota = require('../controller/frota');

Router.post('/post/frota', frota.create);
Router.get('/get/frota', frota.readAll);
Router.get('/get/frotaComplera', frota.view)

module.exports = Router;