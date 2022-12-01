const getUsuario = () => {
    return `select * from usuario`;
}

const postUsuario = (body) => {
    return `insert into usuario value(null, '${body.email}', '${body.user}', '${body.password}','${body.favoritos}')`;
}

const delUsuario = (params) => {
    return `delete from usuario where id_user=${params.id}`;
}

module.exports = {
    getUsuario,
    postUsuario,
    delUsuario
}