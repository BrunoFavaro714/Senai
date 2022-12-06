const express = require('express');
const routes = express.Router();
const middle = require('../middleware/middleware.js');

const sub_cat = require('../controllers/sub_cat.js');

routes.get('/reenyedito/get/sub_cat', sub_cat.getSub_cat);
routes.post('/reenyedito/post/sub_cat', sub_cat.postSub_cat);
routes.delete('/reenyedito/delete/sub_cat', middle.validarAdimin, sub_cat.delSub_cat);

module.exports = routes;