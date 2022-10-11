const deleteCadastro = (body) => {
    return `CALL check_out('${body.cpf}', ${body.id_vaga})`
}

const deleteVaga = (body) => {
    return `DELETE FROM vagas WHERE id_vaga=${body.id_vaga}`
}

module.exports = {
    deleteCadastro,
    deleteVaga
}