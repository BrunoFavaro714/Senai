const conDB = require('../conDB.js');
const dentista = require('../models/profissionais.js');


class Tratamento {
    constructor(id, consulta, nome, valor){
        this.id = id;
        this.consulta = consulta;
        this.nome = nome;
        this.valor = valor;
    }
}

class Consulta{
    constructor(id, nome, data, horario){
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }

    tratamentos = [];
    
    addTratamentos(trat){
        this.tratamentos.push(trat);
    }
}

class Profissional{
    constructor(id, nome, especialidade){
        this.id = id;
        this.nome = nome;
        this.especialidade = especialidade;
    }

    consultas = [];

    addConsultas(cons){
        this.consultas.push(cons)
    }
}

const profissionais = (req, res) => {
    conDB.query(dentista.getProfissionais(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const vw_completa = (req, res) => {
    conDB.query(dentista.getVW_completa(req.params), (err, result) => {
        if(err == null){
            let resultado = [];
            let i = 0;
            result.forEach(item => {
                tratamento = new Tratamento(item.id_tratamento, item.id_consulta, item.tratamento, item.valor);

                consulta = new Consulta(item.id_consulta, item.paciente, item.data, item.horario);
                consulta.addTratamentos(tratamento);
    
                profissional = new Profissional(item.id_profissional, item.nome, item.especialidade);
                profissional.addConsultas(consulta);

                resultado[i] = profissional

                i++;
            })
            res.status(200).json(resultado).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    profissionais,
    vw_completa
}

