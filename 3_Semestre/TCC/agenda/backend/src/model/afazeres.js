const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const afazeresSchema = new Schema({
    id_usuario: {type: String, required: true},
    data: {type: Date, required: true},
    titulo: {type: String, required: true},
    conteudo: {type: String, required: true},
    cor: {type: String, required: true},
    urgencia: {type: String, required: true},
    status: {
        concluido: {type: Boolean, required: true},
        atrazado: {type: Boolean, required: true},
    }
})

module.exports = mongoose.model('afazeres', afazeresSchema)