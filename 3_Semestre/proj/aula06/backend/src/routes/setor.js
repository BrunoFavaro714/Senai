const express = require('express');
const Router = express.Router();

const setor = require('../controller/setor');

Router.post('/post/setor', setor.create);
Router.get('/get/setor/inOrder', setor.readInOrder);
Router.get('/get/setor/inOrder/desc', setor.readInOrderDesc);
Router.get('/get/setor/inOrder/:setor', setor.readInOrderFilter)
Router.get('/get/setor', setor.read);
Router.delete('/delete/setor/:id', setor.del)

module.exports = Router;