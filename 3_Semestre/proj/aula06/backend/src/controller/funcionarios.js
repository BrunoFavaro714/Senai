const jwt = require('jsonwebtoken');
require('dotenv').config();

const Funcionarios = require('../model/funcionarios');

const login = (req, res) => {
    const user = req.body;

    Funcionarios.findOne({ 'email':user.email }, (err, funcionario) => {
        if(err == null) {
            if(funcionario != null) {
                if(user.email == funcionario.email && user.senha == funcionario.senha) {
                    jwt.sign(user, process.env.KEY, function(err, token) {
                        if(err == null){
                            user['token'] = token;
                            res.status(200).json(user.token).end();
                        }else{
                            res.status(404).json(err).end();
                        }
                    })
                }
            }else{
                res.status(404).json(err).end()
            }
        }else{
            handleError(err);
        }
    })
}

const readAll = (req, res) => {
    Funcionarios.find({}, (err, returned) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{
            res.json({ Funcionarios:returned }).end();
        }
    })
}

const create = (req, res) => {
    const newFuncionarios = new Funcionarios(req.body)
    newFuncionarios.save(err => {
        if(err){
            res.status(500).json({ erro:err }).end();
        }else{
            res.status(201).end()
        }
    })
}

module.exports = {
    login,
    create,
    readAll
}