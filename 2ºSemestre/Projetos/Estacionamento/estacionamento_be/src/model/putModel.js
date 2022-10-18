const putVagas = (body) => {
    return `UPDATE vagas SET
            status='${body.status}'
            WHERE id_vaga='${body.id_vaga}';`
}

module.exports = {
    putVagas
}