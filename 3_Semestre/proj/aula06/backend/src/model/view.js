const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const view = new Schema({
    placa: {type: String, required: true},
    modelo: {type: String, required: true},
    funcao: {type: String, required: true},
    last_prev: {type: Date, required: true},
    disponibilidade: {
        em_manutencao: {type: Boolean, required: true, default: true},
        em_transito: {type: Boolean, required: true, default: false}
    },
    setor: {type: String, required: true},
    motorista: {type: String, required: true},
})


module.exports = mongoose.model('FrotasManu', view, 'FrotasManu');