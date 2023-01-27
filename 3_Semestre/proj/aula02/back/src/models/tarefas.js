const getTarefas = () => {
    return `select * from tarefas`
}

const getTarefasAbertas = () => {
    return `select * from tarefas where estado='Aberta'`
}

const getTarefasFinalis = () => {
    return `select * from tarefas where estado='Finalizada'`
}

const getTarefasCancel = () => {
    return `select * from tarefas where estado='Cancelada'`
}

const postTarefas = (body) => {
    return `insert into tarefas value(null, '${body.desc}', '${body.inicio}', null, 'Aberta')`
}

const putTarefasFinalis = (params) => {
    return `update tarefas set estado='Finalizada', hora_fim=curtime() where id=${params.id}`
}

const putTarefasCancel = (params) => {
    return `update tarefas set estado='Cancelada', hora_fim=curtime() where id=${params.id}`
}

module.exports = {
    getTarefas,
    getTarefasAbertas,
    getTarefasFinalis,
    getTarefasCancel,
    postTarefas,
    putTarefasFinalis,
    putTarefasCancel
}