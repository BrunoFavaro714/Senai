const getPedidos = () => {
    return `SELECT * FROM pedidos`;
}

const getPedidosEntrega = () => {
    return `SELECT * FROM pedidos WHERE hora_entrega=null`;
}

const getPedidosFim = () => {
    return `SELECT * FROM pedidos WHERE hora_fim=null`;
}

const postPedidos = (body) => {
    return `INSERT INTO pedidos VALUES(null, '${body.client}', '${body.endereco}', '${body.produto}', CURDATE(), CURTIME(), null, null, ${body.entregador})`
}

const putPedidos = (body) => {
    return `UPDATE pedidos SET hora_${body.estage}=curtime() WHERE id_pedido=${body.id_pedido}`
}

const delPedidos = (params) => {
    return `DELETE FROM pedidos WHERE id_pedido=${params.id}`
}

module.exports = {
    getPedidos,
    postPedidos,
    putPedidos,
    delPedidos
}