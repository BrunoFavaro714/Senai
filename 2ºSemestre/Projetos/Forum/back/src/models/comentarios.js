const getComentarios = () => {
    return `select * from comentarios`
}

const postCometarios = (body) => {
    return `insert into comentarios value(null, ${body.id_user}, ${body.id_publi}, '${body.conteudo}')`;
}

const delComentarios = (body) => {
    return `delete from comentarios where id_coment=${body.id_coment}`;
}

module.exports = {
    getComentarios, 
    postCometarios,
    delComentarios
}