const Frota = require('../model/frota');
const FrotasManu = require('../model/view');

const readAll = (req, res) => {
    Frota.find({}, (err, returned) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{
            res.json({ Frota:returned }).end();
        }
    })
}

const readVperF = (req, res) => {
    Frota.find({ motorista:req.params.nome}, (err, returned) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{
            res.json({ Frota:returned }).end();
        }
    })
}

const create = (req, res) => {
    const newFrota = new Frota(req.body)
    newFrota.save(err => {
        if(err){
            res.status(500).json({ erro:err }).end();
        }else{
            res.status(201).end()
        }
    })
}

const update = (req, res) => {
    Frota.findOneAndUpdate({ placa:req.body.placa }, {
        placa: req.body.placa,
        modelo: req.body.modelo,
        funcao:  req.body.funcao,
        last_prev: req.body.prevent,
        disponibilidade: {
            em_manutencao:req.body.disponibilidade.em_manutencao,
            em_transito: req.body.disponibilidade.em_transito
        },
        setor: req.body.setor,
        motorista: req.body.motorista
    }, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{

            res.json({ Frota:result }).end();
        }
    })
}

const del = (req, res) => {
    Frota.findOneAndDelete({ _id: req.params.id }, (err, result) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{

            res.json({ Frota:result }).end();
        }
    })
}

const view = (req, res) => {
    FrotasManu.find({}, (err, returned) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{
            res.json({ Frota:returned }).end();
        }
    })
}

module.exports = {
    create,
    readAll,
    readVperF,
    update,
    del,
    view
}