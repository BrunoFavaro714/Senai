const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const frotaSchema = new Schema({
    placa: {type: String, required: true},
    modelo: {type: String, required: true},
    funcao: {type: String, required: true},
    last_prev: {type: Date, required: true},
    disponibilidade: {type: Boolean, required: true},
    setor: {type: String, required: true},
    motorista: {type: String, required: true},
})

module.exports = mongoose.model('Frota', frotaSchema);