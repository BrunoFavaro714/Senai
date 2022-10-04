const toReadAll = () => {
    return `SELECT * FROM vagas`;
}

const toRead = (params) => {
    return `SELECT * FROM vagas WHERE id_vaga=${params.id_vaga}`;
}

const toCreate = (body) => {
    return `INSERT INTO vagas VALUE (null, '1', '${body.tipo}', ${body.valor})`;
}

module.exports = {
    toReadAll,
    toRead,
    toCreate
}