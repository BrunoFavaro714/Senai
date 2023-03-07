const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setorSchema = new Schema({
    nome: {type: String, required: true},
    limite_alocavel: {type: Number, required: true},
    total_alocado: {type: Number, required: true},
    data_alocada: {type: Date, required: true},
})

setorSchema.index({nome: 'asc', data_alocada: 'desc' })

module.exports = mongoose.model('Setor', setorSchema)