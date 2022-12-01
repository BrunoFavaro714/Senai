const conDB = require('../conDB.js');
const sub_cat = require('../models/sub_cat.js');

const getSub_cat = (req, res) => {
    conDB.query(sub_cat.getSub_cat(), (err, result) => {
        if(err == null || err === undefined){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const postSub_cat = (req, res) => {
    conDB.query(sub_cat.postSub_cat(req.body), (err, result) => {
        if (err == null || err === undefined){
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delSub_cat = (req, res) => {
    conDB.query(sub_cat.delSub_cat(req.params), (err, result) => {
        if (err == null || err === undefined){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getSub_cat,
    postSub_cat,
    delSub_cat
}