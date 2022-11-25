const express = require('express');
const routes = express.Router();

const sub_cat = require('../controllers/sub_cat.js');

routes.get('/reenyedito/get/sub_cat', sub_cat.getSub_cat);

module.exports = routes;