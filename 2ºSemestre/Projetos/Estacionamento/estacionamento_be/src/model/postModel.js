const postCadastro = (body) => {
    return `CALL check_in('${body.cpf}', '${body.nome}', '${body.telefone}', '${body.placa}', '${body.tipo}', '${body.modelo}', '${body.cor}', '${body.id_vaga}')`
}

const postVaga = (body) => {
    return `INSERT INTO vagas VALUE(default, false, '${body.tipo}', ${body.valor})`
}

module.exports = {
    postCadastro,
    postVaga
}