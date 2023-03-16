const express = require('express');
const Router = express.Router();

const frota = require('../controller/frota');

Router.post('/post/frota', frota.create);
Router.get('/get/frota', frota.readAll);
Router.get('/get/frota/:nome', frota.readVperF)
Router.get('/get/frotaComplera', frota.view);
Router.put('/put/frota', frota.update);
Router.delete('/del/frota/:id', frota.del)

module.exports = Router;