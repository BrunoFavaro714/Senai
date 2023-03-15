const jwt = require('jsonwebtoken');
require('dotenv').config();

const Funcionarios = require('../model/funcionarios');

const login = (req, res) => {
    const user = req.body;

    Funcionarios.findOne({ 'email':user.email, 'senha':user.senha }, (err, funcionario) => {
        
        if(err == null) {
            if(funcionario != null) {
                jwt.sign(user, process.env.KEY, function(error, token) {
                    if(err == null){
                        user['token'] = token;
                        user.accessLv = funcionario.accessLv;
                        res.status(200).json(user).end();
                    }else{
                        res.status(404).json(error).end();
                    }
                })
            }else{
                res.status(404).json('ERRO! Usuario Inexistente').end()
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

const update = (req, res) => {
    Funcionarios.findOneAndUpdate({ email:req.body.email }, {
        nascimento: req.body.nascimento,
        setor: req.body.setor,
        função: req.body.funcao,
    }, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{

            res.json({ Funcionarios:result }).end();
        }
    })
}

const del = (req, res) => {
    Funcionarios.findOneAndDelete({ _id:req.params.id }, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{

            res.json({ Frota:result }).end();
        }
    })
}

module.exports = {
    login,
    create,
    readAll,
    update,
    del
}