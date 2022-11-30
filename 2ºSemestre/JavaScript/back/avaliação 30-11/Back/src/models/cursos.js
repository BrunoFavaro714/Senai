const getCursos = () => {
    return `SELECT * FROM cursos`
}

const postCurso = (body) => {
    return `INSERT INTO cursos VALUE(null, '${body.curso}', ${body.duracao})`
}

const delCurso = (params) => {
    return `DELETE FROM cursos WHERE id=${params.id}`
}

module.exports = {
    getCursos,
    postCurso,
    delCurso
}