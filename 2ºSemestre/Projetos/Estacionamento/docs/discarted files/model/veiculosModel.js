const toReadAll = () => {
    return `SELECT * FROM veiculos`;
}

const toRead = (params) => {
    return `SELECT * FROM clientes WHERE cpf='${params.cpf}'`;
}

const toCreate = (body) => {
    return `INSERT INTO veiculos VALUE ('${body.placa}', '${body.tipo}', '${body.modelo}', '${body.cor}', '${body.cpf}')`;
}

module.exports = {
    toReadAll,
    toRead,
    toCreate
}