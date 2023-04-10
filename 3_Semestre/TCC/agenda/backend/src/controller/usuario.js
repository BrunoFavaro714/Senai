const Usuario = require('../model/usuarios');

const Create = (req, res) => {
    const newUsuario = new Usuario(req.body)

    newUsuario.save(err => {
        if(err != null){
            res.status(500).json({ erro:err }).end()
        }else{
            res.status(201).end()
        }
    })
}

const Read = (req, res) => {
    Usuario.find({}, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end()
        }else{
            result.json({ Usuarios:result }).end()
        }
    })
}

const Update = (req, res) => {
    Usuario.findOneAndUpdate({ _id:req.params.id }, {
        email: req.body.email,
        senha: req.body.senha
    }, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end()
        }else{
            res.json({ Usuario:result }).end()
        }
    })
}

const Delete = (req, res) => {
    Usuario.findOneAndDelete({ _id: req.params.id }, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end()
        }else{
            res.json({ Usuario:result }).end()
        }
    })
}

module.exports = {
    Create,
    Read,
    Update,
    Delete
}