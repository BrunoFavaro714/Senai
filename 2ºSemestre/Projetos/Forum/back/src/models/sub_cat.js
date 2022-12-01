const getSub_cat = () => {
    return `select * from sub_cat`;
}

const postSub_cat = (body) => {
    return `insert into sub_cat value(null, ${body.id_cat}, '${body.nome_subcat}', '${body.descricao}')`
}

const delSub_cat = (params) => {
    return `delete from sub_cat where id_subcat=${params.id}`;
}

module.exports = {
    getSub_cat,
    postSub_cat,
    delSub_cat
}