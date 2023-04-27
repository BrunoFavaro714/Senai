const Afazeres = require('../model/afazeres');

const Create = (req, res) => {
    const newAfazer = new Afazeres(req.body);

    newAfazer.save().then(result => {
        res.status(201).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end();
    })
}

const ReadAll = (req, res) => {
    Afazeres.find({}).then(result => {
        res.json({ Afazeres:result }).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end();
    })
}

const Read = (req, res) => {
    Afazeres.find({ id_usuario: req.params.id }).then(result => {
        res.json({ Afazeres:result }).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end();
    })
}

const Update = (req, res) => {
    Afazeres.findOneAndUpdate({ _id:req.params.id }, {
        id_usuario: req.body.id_usuario,
        data: req.body.data,
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        cor: req.body.cor,
        urgencia: req.body.urgencia,
        status: {
            concluido: req.body.status.concluido,
            atrazado: req.body.status.atrazado,
        }
    }).then(result => {
        res.json({ Afazeres:result }).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

const Delete = (req, res) => {
    Afazeres.findOneAndDelete({ _id: req.params.id }).then(result => {
        res.json({ Afazeres:result }).end()
    }).catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

module.exports = {
    Create,
    ReadAll,
    Read,
    Update,
    Delete
}