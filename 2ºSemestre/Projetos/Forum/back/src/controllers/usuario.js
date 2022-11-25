const conDB = require('../conDB.js');
const usuario = require('../models/usuario.js');

const getUsuario = (req, res) => {
    conDB.query(usuario.getUsuario(), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getUsuario,
}