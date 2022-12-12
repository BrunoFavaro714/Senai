const getComentarios = () => {
    return `select * from comentarios`
}

const getComentariosFiltrado = (params) => {
    return `select * from comentarios where id_publi=${params.publi}`
}


const postCometarios = (body) => {
    return `insert into comentarios value(null, ${body.id_user}, ${body.id_publi}, '${body.conteudo}')`;
}

const delComentarios = (params) => {
    return `delete from comentarios where id_coment=${params.id_coment}`;
}

module.exports = {
    getComentarios,
    getComentariosFiltrado,
    postCometarios,
    delComentarios
}