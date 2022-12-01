const getRespostas = () => {
    return `select * from respostas`
}

const postRespostas = (body) => {
    return `insert into respostas value(null, ${body.id_coment}, ${body.id_user}, '${body.conteudo}')`
}

const delRespostas = (params) => {
    return `delete from respostas where id_resp=${params.id}`;
}

module.exports = {
    getRespostas,
    postRespostas,
    delRespostas
}