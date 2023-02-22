const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const manutencaoSchema = new Schema({
    placa: {type: String, required: true},
    modelo: {type: String, required: true},
    data: {type: String, required: true},
    tempo: {type: String},
    tempo_estimado: {type: String, required: true},
    valor: {type: Number, required: true}
})

module.exports = mongoose.model('Manutencao', manutencaoSchema);