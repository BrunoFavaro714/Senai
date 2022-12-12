const getPublic = () => {
    return `select * from publicacoes`;
}

const getVwzinha = () => {
    return `select * from vw_zinha order by horario desc`;
}

const postPublicacoes = (body, file) => {
    if (file != null){
        body.imagem = file.buffer.toString('base64');
        return `insert into publicacoes value(null, ${body.id_user}, ${body.id_cat}, CURRENT_TIMESTAMP(),'${body.imagem}' ,'${body.conteudo}')`; 
    }else{
        return `insert into publicacoes value(null,${body.id_user},${body.id_cat},CURRENT_TIMESTAMP(), null,'${body.conteudo}')`;
    }
}

const delPublicacoes = (params) => {
    return `delete from publicacoes where id_publi=${params.id_publi}`;
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