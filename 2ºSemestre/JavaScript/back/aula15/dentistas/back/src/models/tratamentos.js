const getTratamentos = () => {
    return `SELECT * FROM tratamentos`
}

const postTratamentos = (body) => {
    return `INSERT INTO tratamentos VALUES(null, ${body.consulta}, '${body.tratamento}', ${body.valor})`
}

const putTratamentos = (body) => {
    return `UPDATE tratamentos SET tratamentos='${body.tatamento}' WHERE=${body.id};
            UPDATE tratamentos SET tratamentos=${body.valor} WHERE=${body.id}`
}

const deleteTratamentos = (params) => {
    return `DELETE FROM tratamentos WHERE id=${params.id}`
}

module.exports = {
    getTratamentos,
    postTratamentos,
    putTratamentos,
    deleteTratamentos
}