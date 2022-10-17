const postProduto = (body) => {
    return `INSERT INTO Produtos VALUE (${body.cod_prod}, '${body.nome_prod}')`;
}

const postDepart = (body) => {
    return `INSERT INTO Departamentos VALUE (${body.cod_depart}, '${body.nome_depart}')`;
}

const postSolic = (body) => {
    return `CALL solicita_um_item(${body.n_sol}, ${body.depto}, ${body.func}, ${body.prod}, ${body.qtd}, ${body.total})`;
}

module.exports = {
    postProduto,
    postDepart,
    postSolic
}