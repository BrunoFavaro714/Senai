const getRespostas = () => {
    return `select * from respostas`
}

const getRespostasFiltrada = (params) => {
    return `select * from vw_respo where id_coment=${params.coment}`
}

const postRespostas = (body) => {
    return `insert into respostas value(null, ${body.id_coment}, ${body.id_user}, '${body.conteudo}')`
}

const delRespostas = (params) => {
    return `delete from respostas where id_resp=${params.id_resp}`;
}

module.exports = {
    getRespostas,
    getRespostasFiltrada,
    postRespostas,
    delRespostas
}