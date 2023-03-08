const Setor = require('../model/setor');

const readInOrder = async (req, res) => {
    let returned = await Setor.find({}).sort({ data_alocada: 'asc', nome: 'asc' });

    res.json({ Setor:returned }).end();
}
const readInOrderFilter = async (req, res) => {
    let returned = await Setor.find({ nome:req.params.setor }).sort({ data_alocada: 'asc', nome: 'asc' });

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

const del = (req, res) => {
    Setor.findOneAndDelete({ '_id':req.params.id })
    .then(resp => {
        if(resp){
            res.status(204).json({ resposta:resp }).end()
        }else{
            res.status(404).json({ resposta:resp }).end()
        }
    })
    .catch(err => {
        res.status(500).json({ erro:err }).end()
    })
}

module.exports = {
    read,
    readInOrder,
    readInOrderFilter,
    create,
    del,
}