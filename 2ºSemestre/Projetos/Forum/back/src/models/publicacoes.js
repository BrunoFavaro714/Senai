const getPublic = () => {
    return `select * from publicacoes`
}

const postPublicacoes = (body) => {
    return `insert into publicacoes value(null, ${body.id_user}, ${body.id_subcat}, '${body.horario}', '${body.conteudo}')`;
}

const delPublicacoes = (body) => {
    return `delete from publicacoes where id_publi=${body.id_publi}`;
}

module.exports = {
    getPublic,
    postPublicacoes,
    delPublicacoes
}