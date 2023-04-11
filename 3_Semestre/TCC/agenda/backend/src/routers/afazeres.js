const express = require('express');
const Router = express.Router();

const afazeres = require('../controller/afazeres');

Router.post('/post/afazeres', afazeres.Create);
Router.get('/get/afazeres', afazeres.Read);
Router.put('/put/afazeres/:id', afazeres.Update);
Router.delete('/delete/afazeres/:id', afazeres.Delete);

module.exports = Router;