const toReadAll = () => {
    return `SELECT * FROM vw_solicitacoes`
}

const toRead = (params) => {
    return `SELECT * FROM vw_solicitacoes WHERE Num_Sol=${params.num_sol}`
}

const toCreate = (body) => {
    return `call solicita_um_item(${body.n_sol}, ${body.depto}, ${body.func}, ${body.prod}, ${body.qtd}, ${body.total})`
}

module.exports = {
    toReadAll,
    toRead,
    toCreate
}