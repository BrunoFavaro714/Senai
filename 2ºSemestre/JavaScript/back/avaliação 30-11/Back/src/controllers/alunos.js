const conDB = require('../conDB');
const alunos = require('../models/alunos');

class Aluno {
    constructor(id, nome, nascimento){
        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Curso {
    constructor(id, curso, duracao){
        this.id = id;
        this.curso = curso;
        this.duracao = duracao;
    }
}

const getAlunos = (req, res) => {
    conDB.query(alunos.getAlunos(), (err, result) => {
        if(err == null || err === undefined) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const postAluno = (req, res) => {
    conDB.query(alunos.postAluno(req.body), (err, result) => {
        if(err == null || err === undefined) {
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delAluno = (req, res) => {
    conDB.query(alunos.delAluno(req.params), (err, result) => {
        if(err == null || err === undefined) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const getVw_completa = (req, res) => {
    conDB.query(alunos.getVw_completa(), (err, result) => {
        if(err == null || err === undefined) {
            let resultado = [];
            let i = 0;
            result.forEach(item => {
                aluno = new Aluno(item.id_aluno, item.nome, item.nascimento);
                curso = new Curso(item.id_curso, item.curso, item.duracao);

                resultado[i] = {
                    "aluno":aluno,
                    "curso":curso,
                    "data":item.data
                }

                i++;
            })
            res.status(200).json(resultado).end();
        }else{
            res.status(400).json(err).end()
        }
    })
}

module.exports = {
    getAlunos,
    postAluno,
    delAluno,
    getVw_completa
}