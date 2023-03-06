const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setorSchema = new Schema({
    nome: {type: String, required: true, unique: true},
    limite_alocavel: {type: Number, required: true},
    total_alocado: {type: Number, required: true},
})

module.exports = mongoose.model('Setor', setorSchema)