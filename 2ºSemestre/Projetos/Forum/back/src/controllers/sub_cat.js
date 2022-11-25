const conDB = require('../conDB.js');
const sub_cat = require('../models/sub_cat.js');

const getSub_cat = (req, res) => {
    conDB.query(sub_cat.getSub_cat(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getSub_cat,
}