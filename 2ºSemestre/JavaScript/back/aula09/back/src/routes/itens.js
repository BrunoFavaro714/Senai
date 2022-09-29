const express = require('express');
const router = express.Router();

const item = require('../controllers/ItemController');

router.get('/patrimonio/itens', item.listarItens);
router.post('/patrimonio/itens', item.criarItens);
router.delete('/patrimonio/itens', item.excluirItens);

module.exports = router;