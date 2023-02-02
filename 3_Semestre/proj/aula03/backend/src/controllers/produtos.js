const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let produto = await prisma.produtos.create({
        data: req.body
    });

    res.status(200).json(produto).end();
}

const read = async (req, res) => {
    let produtos = await prisma.produtos.findMany();

    res.status(200).json(produtos).end();
}

module.exports = {
    create,
    read
}