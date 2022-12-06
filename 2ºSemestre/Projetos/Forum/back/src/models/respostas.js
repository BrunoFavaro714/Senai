const getRespostas = () => {
    return `select * from respostas`
}

const postRespostas = (body) => {
    return `insert into respostas value(null, ${body.id_coment}, ${body.id_user}, '${body.conteudo}')`
}

const delRespostas = (body) => {
    return `delete from respostas where id_resp=${body.id_resp}`;
}

module.exports = {
    getRespostas,
    postRespostas,
    delRespostas
}