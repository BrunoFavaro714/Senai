const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let setor = await prisma.Setores.create({
        data: req.body
    })

    res.status(200).json(setor).end();
}

const readFull = async (req, res) => {
    let setores = await prisma.Setores.findMany({
        select:{
            id_setor: true,
            nome: true,
            comissao: true,
            produto: true,
            vendedor: true
        }
    });


    res.status(200).json(setores).end();
}
// const readProdutos = async (req, res) => {
//     let setores = await prisma.Setores.findMany({
//         select:{
//             nome: true,
//             comissao: true,
//             produto: true,
//         }
//     });


//     res.status(200).json(setores).end();
// }

module.exports = {
    create,
    readFull
}