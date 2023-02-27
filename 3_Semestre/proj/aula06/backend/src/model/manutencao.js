const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const manutencaoSchema = new Schema({
    placa: {type: String, required: true},
    data_inicio: {type: Date, required: true},
    tempo_estimado: {type: String, required: true},
    data_fim: {type: Date},
    valor: {type: Number, required: true},
    descricao: {type: String}
})

module.exports = mongoose.model('Manutencao', manutencaoSchema);