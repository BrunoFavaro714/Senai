const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    accessLv: {type: Number, required: true},
    nomeCompleto: {type: String, required: true},
    nascimento: {type: Date, required: true},
    setor: {type: String, required: true},
    função: {type: String, required: true}
})

module.exports = mongoose.model('Funcionario', funcionarioSchema);