const conDB = require('../conDB.js');
const categorias = require('../models/categorias.js');

const getCategorias = (req, res) => {
    conDB.query(categorias.getCategorias(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getCategorias,
}