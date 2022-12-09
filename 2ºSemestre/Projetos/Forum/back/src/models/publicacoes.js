const getPublic = () => {
    return `select * from publicacoes`;
}

const getVwzinha = () => {
    return `select * from vw_zinha`;
}

const getPubli_image = (params) => {
    return `select * from publi_images where id_publi=${params.id}`;
}

const postPublicacoes = (body) => {
    return `insert into publicacoes value(null, ${body.id_user}, ${body.id_cat}, '${body.horario}','${body.imagem}' ,'${body.conteudo}')`;
}

const delPublicacoes = (body) => {
    return `delete from publicacoes where id_publi=${body.id_publi}`;
}

module.exports = {
    getPublic,
    postPublicacoes,
    getPubli_image,
    delPublicacoes,
    getVwzinha
}