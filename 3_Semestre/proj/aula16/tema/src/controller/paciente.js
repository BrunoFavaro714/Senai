const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const criar = async (req, res) => {
    let parse = {
        nome_completo: req.body.nome_completo,
        nascimento: req.body.nascimento,
        peso: Number(req.body.peso),
        altura: Number(req.body.altura)
    }
    let paciente = await prisma.paciente.create({
        data: parse
    });
    res.redirect('/?msg=Paciente cadastrado com Sucesso!')
}

const buscar = async (req, res) => {
    let paciente = await prisma.paciente.findMany({});

    res.render('index', {pacientes:paciente})
}

const atualizar = async (req, res) => {
    let parse = {
        nome_completo: req.body.nome_completo,
        nascimento: req.body.nascimento,
        peso: Number(req.body.peso),
        altura: Number(req.body.altura)
    }
    let paciente = await prisma.paciente.update({
        data: parse,
        where: {
            id: Number(req.body.id)
        }
    });
    res.redirect('/?msg=Dados do Paciente Atualizado com Sucesso!')
}

const excluir = async (req, res) => {
    let paciente = await prisma.paciente.delet({
        where:{
            id: Number(req.params.id)
        }
    });
    res.redirect('/?msg=Paciente Excluido com Sucesso!')
}

module.exports = {
    criar,
    buscar,
    atualizar,
    excluir
}