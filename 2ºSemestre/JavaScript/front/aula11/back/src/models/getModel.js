const getProdutos = ()  => {
    return `SELECT * FROM Produtos`
}

const getDepart = () => {
    return `SELECT * FROM Departamentos`
}

const getVw_geral = () => {
    return `SELECT * FROM vw_geral`
}

const getVw_depart = (params)  => {
    return `SELECT * FROM vw_depart where Nome_produto='${params}'`
}

const getProdutosData = (params) => {
    return `SELECT * FROM vw_geral WHERE Data_sol like '%${params}%'`
}

const getVw_func_solic = () => {
    return `SELECT * FROM vw_func_solic`
}

module.exports = {
    getProdutos,
    getDepart,
    getVw_geral,
    getVw_depart,
    getProdutosData,
    getVw_func_solic
}