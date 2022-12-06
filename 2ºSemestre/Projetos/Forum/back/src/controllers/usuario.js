const jwt = require('jsonwebtoken');
const conDB = require('../conDB.js');
const usuario = require('../models/usuario.js');
require('dotenv').config();

const getUsuario = (req, res) => {
    conDB.query(usuario.getUsuario(), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const login = (req, res) => {
    const user = req.body;

    conDB.query(usuario.getUsuarioLogin(user), (err, result) => {
        if(err == null){
            if(user.email == result[0].email && user.senha == result[0].senha){
                let retorno = {
                    "id_user": result[0].id_user,
                    "id_role": result[0].id_role,
                    "email": result[0].email,
                    "user": result[0].user,
                    "favoritos": result[0].favoritos
                }

                jwt.sign(retorno, process.env.KEY, (err, token) => {
                    if(err == null) {
                        retorno["token"] = token;
                        res.status(200).json(retorno).end();
                    }else {
                        res.status(404).json(err).end();
                    }
                });   
            }
        }else{
            res.status(400).json(err).end()
        }
    })
}

const postUsuario = (req, res) => {
    conDB.query(usuario.postUsuario(req.body), (err, result) => {
        if (err == null){
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delUsuario = (req, res) => {
    conDB.query(usuario.delUsuario(req.params), (err, result) => {
        if (err == null){
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