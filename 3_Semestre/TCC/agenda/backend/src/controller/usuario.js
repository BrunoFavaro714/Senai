const Usuario = require('../model/usuario');

const Create = (req, res) => {
    const newUsuario = new Usuario(req.body)

    newUsuario.save().then(result => {
            res.status(201).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

const Read = (req, res) => {
    Usuario.find({}).then(result => {
        res.json({ Usuarios:result }).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

const Update = (req, res) => {
    Usuario.findOneAndUpdate({ _id:req.params.id }, {
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
    Usuario.findOneAndDelete({ _id: req.params.id }).then(result => {
        res.json({ Usuario:result }).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

module.exports = {
    Create,
    Read,
    Update,
    Delete
}