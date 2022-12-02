const jwt = require('jsonwebtoken');
const conDB = require('../conDB.js');
const usuario = require('../models/usuario.js');
require('dotenv').config();

const getUsuario = (req, res) => {
    conDB.query(usuario.getUsuario(), (err, result) => {
        if (err == null || err === undefined){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const login = (req, res) => {
    const user = req.body;

    conDB.query(usuario.getUsuarioLogin(user), (err, result) => {
        if(err == null || err === undefined){
            if(user.email == result[0].email && user.senha == result[0].senha){
                res.status(200).json(result).end();
            }
        }else{
            res.status(400).json(err).end()
        }
    })
}

const postUsuario = (req, res) => {
    conDB.query(usuario.postUsuario(req.body), (err, result) => {
        if (err == null || err === undefined){
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delUsuario = (req, res) => {
    conDB.query(usuario.delUsuario(req.params), (err, result) => {
        if (err == null || err === undefined){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getUsuario,
    login,
    postUsuario,
    delUsuario
}