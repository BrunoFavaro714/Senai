const getPublic = () => {
    return `select * from publicacoes`;
}

const getVwzinha = () => {
    return `select * from vw_zinha`;
}

const postPublicacoes = (body) => {
    return `insert into publicacoes value(null, ${body.id_user}, ${body.id_cat}, '${body.horario}','${body.imagem}' ,'${body.conteudo}')`;
}

const delPublicacoes = (body) => {
    return `delete from publicacoes where id_publi=${body.id_publi}`;
}

const toAscii = (dados)=>{
    dados.forEach(d => {
        if(d.img != null) d.img = d.img.toString('ascii');
    });
    return dados;
}

module.exports = {
    getPublic,
    postPublicacoes,
    delPublicacoes,
    getVwzinha,
    toAscii
}