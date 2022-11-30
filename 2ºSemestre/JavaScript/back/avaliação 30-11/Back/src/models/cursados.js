const getCursados = () => {
    return `SELECT * FROM cursados`
}

const getCursadosFilt = (params) => {
    return `SELECT * FROM cursados WHERE aluno=${params.id_aluno}`
}

const postCursados = (body) => {
    return `INSERT INTO cursados VALUE(${body.id_aluno}, ${body.id_curso}, '${body.data}')`
}

module.exports = {
    getCursados,
    getCursadosFilt,
    postCursados
}