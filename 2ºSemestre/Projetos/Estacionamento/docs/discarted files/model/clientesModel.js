const toReadAll = () => {
    return `SELECT * FROM vw_completa`;
}

const toRead = (params) => {
    return `SELECT * FROM clientes WHERE cpf='${params.cpf}'`;
}

const toCreate = (body) => {
    return `INSERT INTO clientes VALUE ('${body.cpf}', '${body.nome}', '${body.telefone}')`;
}

module.exports = {
    toReadAll,
    toRead,
    toCreate
}