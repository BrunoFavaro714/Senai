const getPublic = () => {
    return `select * from publicacoes`
}

const postPublicacoes = (body) => {
    return `insert into publicacoes value(null, ${body.id_user}, ${body.id_subcat}, '${body.horario}', '${body.conteudo}')`;
}

const delPublicacoes = (params) => {
    return `delete from publicacoes where id_publi=${params.id}`;
}

module.exports = {
    getPublic,
    postPublicacoes,
    delPublicacoes
}