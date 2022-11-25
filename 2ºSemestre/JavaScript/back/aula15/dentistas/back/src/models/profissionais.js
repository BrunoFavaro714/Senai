const getProfissionais = () => {
    return `SELECT * FROM profissionais`
}

const getVW_completa = (params) => {
    return `SELECT * FROM vw_completa WHERE id_profissional=${params.id}`;
}

module.exports = {
    getProfissionais,
    getVW_completa
}