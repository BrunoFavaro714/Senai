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

module.exports = {
    readAll,
    create,
}