const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let detalhe = await prisma.detalhes.create({
        data: req.body
    });

    res.status(200).json(detalhe).end();
}

const createMultiple = async (nod) => {
    let detalhes = await prisma.detalhes.createMany({
        data: nod
    });

    //res.status(200).json(detalhes).end();
}

const read = async (req, res) => {
    let detalhes = await prisma.detalhes.findMany();

    res.status(200).json(detalhes).end();
}

module.exports = {
    create,
    createMultiple,
    read
}