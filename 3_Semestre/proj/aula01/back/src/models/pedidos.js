const getPedidos = () => {
    return `SELECT * FROM pedidos`;
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