const toReadAll = () => {
    return `SELECT * FROM controle`
}

const toRead = (params) => {
    return `SELECT * FROM controle WHERE cpf='${params.cpf}'`
}

const toCreate = (body) => {
    return `INSERT INTO controle VALUE ('${body.cpf}', CURRENT_TIMESTAMP(), null, '${body.placa}', ${body.id_vaga})`
}

const toUpdate = (body) => {
    return `UPDATE controle SET 
            saida= '${body.saida}'
            WHERE cpf='${body.cpf}' and id_vaga='${body.id_vaga}'
            ORDER BY entrada DESC
            LIMIT 1;`
}

module.exports = {
    toReadAll,
    toRead,
    toCreate,
    toUpdate
}