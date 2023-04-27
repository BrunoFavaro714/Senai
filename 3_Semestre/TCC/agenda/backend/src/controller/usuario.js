const jwt = require('jsonwebtoken');
require('dotenv').config;

const Usuarios = require('../model/usuario');

const Create = (req, res) => {
    const newUsuario = new Usuarios(req.body)

    newUsuario.save().then(result => {
            res.status(201).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

const Read = (req, res) => {
    Usuarios.find({}).then(result => {
        res.json({ Usuarios:result }).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

const Update = (req, res) => {
    Usuarios.findOneAndUpdate({ _id:req.params.id }, {
        usuario: req.body.usuario,
        email: req.body.email,
        senha: req.body.senha
    }).then(result => {
        res.json({ Usuario:result }).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

const Delete = (req, res) => {
    Usuarios.findOneAndDelete({ _id: req.params.id }).then(result => {
        res.json({ Usuario:result }).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

const Login = (req, res) => {
    const user = req.body;

    Usuarios.findOne({ 'email': user.email, 'senha': user.senha }, {senha:0, __v:0}).then(result => {
        let us = {}
        jwt.sign(result.toJSON(), process.env.KEY, (error, token) => {
            if(error == null){
                us['token'] = token;
                us['usuario'] = result;
                res.status(200).json(us).end()
            }else{
                res.status(404).json(error).end()
            }
        })
    }).catch(err => {
        res.status(404).json('ERRO! Usuario Inexistente/ ' + err).end()
    })
}

module.exports = {
    Create,
    Read,
    Update,
    Delete,
    Login
}