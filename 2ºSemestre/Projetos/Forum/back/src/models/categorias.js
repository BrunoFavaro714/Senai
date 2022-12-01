const getCategorias = () => {
    return `select * from categorias`;
}

const postCategorias = (body) => {
    return `insert into categorias value(null, '${body.nome_cat}', '${body.desc}')`;
}

const delCategorias = (params) => {
    return `delete from categorias where id_cat=${params.id}`;
}

module.exports = {
    getCategorias,
    postCategorias,
    delCategorias
}