const conDB = require('../conDB.js');
const publicacoes = require('../models/publicacoes.js');

const multer = require('multer');
const upload = multer().single('imagem')

const getPublic = (req, res) => {
    conDB.query(publicacoes.getPublic(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const getVwzinha = (req, res) => {
    conDB.query(publicacoes.getVwzinha(), (err, result) => {
        if(err == null){
            res.status(200).json(publicacoes.toAscii(result)).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const postPublic = (req, res) => {
    upload(req, res, (err) => {
        if (err)
            res.status(500).json({ error: 1, payload: err }).end();
        else {
            conDB.query(publicacoes.postPublicacoes(req.body, req.file), (err, result) => {
                if (err == null){
                    res.redirect('http://127.0.0.1:5500/front/pages/home.html')
                }else{
                    res.status(400).json(err).end();
                }
            })
        }
    })
}

const delPublic = (req, res) => {
    conDB.query(publicacoes.delPublicacoes(req.params) , (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getPublic,
    postPublic,
    delPublic,
    getVwzinha
}