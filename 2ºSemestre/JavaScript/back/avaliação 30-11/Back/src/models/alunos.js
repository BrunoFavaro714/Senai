const getAlunos = () => {
    return `SELECT * FROM alunos`
}

const getVw_completa = () => {
    return `SELECT * FROM vw_completa`
}

const postAluno = (body) => {
    return `INSERT INTO alunos VALUE(null, '${body.nome}', '${body.nascimento}')`
}

const delAluno = (params) => {
    return `DELETE FROM alunos WHERE id=${params.id}`
}

module.exports = {
    getAlunos,
    getVw_completa,
    postAluno,
    delAluno
}