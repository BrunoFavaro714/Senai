const Manutencao = require('../model/manutencao');

const readAll = (req, res) => {
    Manutencao.find({}, (err, returned) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{
            res.json({ Manutencao:returned }).end();
        }
    })
}

const create = (req, res) => {
    const newManutencao = new Manutencao(req.body)
    newManutencao.save(err => {
        if(err){
            res.status(500).json({ erro:err }).end();
        }else{
            res.status(201).end()
        }
    })
}

const update = (req, res) => {
    Manutencao.findOneAndUpdate({ _id:req.params.id }, {
        placa: req.body.placa,
        data_inicio: req.body.data_inicio,
        tempo_estimado: req.body.tempo_estimado,
        valor: req.body.valor,
        descricao: req.body.descricao
    }, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{

            res.json({ Manutencao:result }).end();
        }
    })
}

module.exports = {
    readAll,
    create,
    update,
}