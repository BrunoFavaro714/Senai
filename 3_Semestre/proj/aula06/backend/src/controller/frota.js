const Frota = require('../model/frota');
const Manutencoes = require('../model/manutencao');

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

const frotaComplera = (req, res) => {
    Frota.find({}, (err, frota) => {
        if(err != null){
            res.status(500).json({ erro:err }).end();
        }else{
            frota.forEach(veiculo => {
                Manutencoes.find({ placa:veiculo.placa }, (err, manutencoes) => {
                    if(err != null){
                        res.status(500).json({ erro:err }).end();
                    }else{
                        console.log(manutencoes);
                        veiculo.manutencao = manutencoes;
                        console.log(veiculo);
                    }
                })
            })

            //console.log(frota);
            res.json({ Frota:frota }).end()
        }
    })
}

module.exports = {
    create,
    readAll,
    frotaComplera
}