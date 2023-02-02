const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let setor = await prisma.Setores.create({
        data: req.body
    })

    res.status(200).json(setor).end();
}

const read = async (req, res) => {
    let setores = await prisma.setores.findMany({
        select:{
            nome: true,
            comissao: true,
            vendedor: true,
            produto: true
        }
    });


    res.status(200).json(setores).end();
}

module.exports = {
    create,
    read
}