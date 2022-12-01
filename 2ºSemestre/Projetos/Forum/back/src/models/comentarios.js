const getComentarios = () => {
    return `select * from comentarios`
}

const postCometarios = (body) => {
    return `insert into comentarios value(null, ${body.id_user}, ${body.id_publi}, '${body.conteudo}')`;
}

const delComentarios = (params) => {
    return `delete from comentarios where id_coment=${params.id}`;
}

module.exports = {
    getComentarios, 
    postCometarios,
    delComentarios
}