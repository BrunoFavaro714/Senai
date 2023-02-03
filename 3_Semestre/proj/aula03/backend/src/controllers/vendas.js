const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const det = require('./detalhes.js');

const create = async (req, res) => {
    let venda = await prisma.vendas.create({
        data: {
            id_vendedor: req.body.id_vendedor
        }
    });

    // const respo = await prisma.$queryRaw`SELECT LAST_INSERT_ID()`;
    // let last_id = respo[0]['LAST_INSERT_ID()'];
    let detal = req.body.detalhes;
    
    detal.forEach(async nod => {
        nod.id_venda = venda.id_venda;
    })

    let detalhes = await prisma.detalhes.createMany({
        data: detal
    });

    console.log(detalhes)

    res.status(200).json(venda).end();
}

const read = async (req, res) => {
    let vendas = await prisma.vendas.findMany({
        select:{
            id_venda:true,
            data:true,
            id_vendedor:true,
            detalhes:true
        }
    });

    res.status(200).json(vendas).end();
}

module.exports = {
    create,
    read
}