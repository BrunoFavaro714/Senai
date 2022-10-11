const getVw_completa = () => {
    return `SELECT * FROM vw_completa`;
}

const getVagas = () => {
    return `SELECT * FROM vagas`;
}

const getRelatorio = () => {
    return `SELECT * FROM controle`;
}

module.exports = {
    getVw_completa,
    getVagas,
    getRelatorio
}