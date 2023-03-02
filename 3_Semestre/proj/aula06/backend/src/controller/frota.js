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
    view
}