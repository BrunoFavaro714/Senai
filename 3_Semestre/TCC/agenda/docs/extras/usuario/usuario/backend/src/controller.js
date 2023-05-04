const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const prisma = new PrismaClient();


const create = async (req, res) => {

    let Usuarios = await prisma.usuarios.create({
        data: req.body
    });

    res.status(201).json(Usuarios).end();
}



const login = async (req, res) => {
    let Usuarios = await prisma.Usuarios.findMany({
        where: {
            email: String(req.body.email),
            senha: String(req.body.senha)
        },
        select: {
            id: true,
            nome: true,
            email: true
        }
    });


    jwt.sign(Usuarios[0], process.env.key, { expiresIn: '10m' }, function (err, token) {
        if (err === null) {
            Usuarios[0]["token"] = token
            res.status(200).json(Usuarios[0]).end()
        } else {
            res.status(404).json(err).end()
        }
    });

}

const readOne = async (req, res) => {
    let Usuarios = await prisma.usuarios.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            email: true
        }
    });


    res.status(200).json(Usuarios).end();
}



// readall
const readall = async (req, res) => {
    let Usuarios = await prisma.usuarios.findMany();

    res.status(200).json(Usuarios).end();
}



const update = async (req, res) => {
    const Usuarios = await prisma.usuarios.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(Usuarios).end();
}



const remove = async (req, res) => {
    const Usuarios = await prisma.usuarios.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(Usuarios).end();
}


module.exports = {
    create,
    login,
    readall,
    readOne,
    update,
    remove
}