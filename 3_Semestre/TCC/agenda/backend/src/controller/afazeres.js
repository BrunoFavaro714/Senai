const Afazeres = require('../model/afazeres');

const Create = (req, res) => {
    const newAfazer = new Afazer(req.body);

    newAfazer.save(err => {
        if(err){
            res.status(500).json({ erro:err }).end();
        }else{
            res.status(201).end()
        }
    })
}

const Read = (req, res) => {
    Afazeres.find({}, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{
            res.json({ Afazeres:result }).end()
        }
    })
}

const Update = (req, res) => {
    Afazeres.findOneAndUpdate({ _id:req.params.id }, {
        id_usuario: req.body.id_usuario,
        data: req.body.data,
        conteudo: req.body.conteudo,
        cor: req.body.cor,
        urgencia: req.body.urgencia,
        status: {
            concluido: req.body.status.concluido,
            atrazado: req.body.status.atrazado,
        }
    }, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end()
        }else{
            res.json({ Afazeres:result }).end()
        }
    })
}

const Delete = (req, res) => {
    Afazeres.findOneAndDelete({ _id: req.params.id }, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end()
        }else{
            res.json({ Afazeres:result }).end()
        }
    })
}

module.exports = {
    Create,
    Read,
    Update,
    Delete
}