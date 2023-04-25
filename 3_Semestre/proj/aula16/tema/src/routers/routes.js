const express = require('express')
const router = express.Router()

const paciente = require('../controller/paciente')

router.get('/', paciente.buscar);
router.post('/post', paciente.criar);
router.put('/put', paciente.atualizar);
router.delete('/delete', paciente.excluir);

module.exports = router