const Setor = require('../model/setor');

const readInOrder = async (req, res) => {
    let returned = await Setor.find({}).sort({ nome: 'asc', data_alocada: 'asc' });

    res.json({ Setor:returned }).end();
}

const read = async (req, res) => {
    Setor.find({}, {nome:0} ,(err, returned) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{
            res.json({ Setor:returned }).end();
        }
    })
}

const create = (req, res) => {
    const newSetor = new Setor(req.body)
    newSetor.save(err => {
        if(err){
            res.status(500).json({ erro:err }).end();
        }else{
            res.status(201).end()
        }
    })
}

module.exports = {
    read,
    readInOrder,
    create,
}