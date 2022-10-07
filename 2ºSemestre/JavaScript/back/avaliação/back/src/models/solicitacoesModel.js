const toReadAllFrom = (table) => {
    return `SELECT * FROM ${table}`
}

const toReadFromBy = (table, where) => {
    return `SELECT * FROM ${table} WHERE ${where.item}=${where.condition}`
}

const toReadFromLike = (table, where) => {
    return `SELECT * FROM ${table} WHERE ${where.item} like "%${where.condition}%"`
}

const toReadOnlyFromBy = (table, only, where) => {
    return `SELECT ${only} FROM ${table} WHERE ${where.item}=${where.condition}`
}

const toCreateIn = (table, content) => {
    return `INSERT INTO ${table} VALUE (${content})`
}

const toCreateByProc = (body) => {
    return `CALL solicita_um_item(${body.n_sol}, ${body.depto}, ${body.func}, ${body.prod}, ${body.qtd}, ${body.total})`
}

const toDeleteFromBy = (table, where) => {
    return `DELETE FROM ${table} WHERE ${where.item}=${where.condition}`
}



module.exports = {
    toReadAllFrom,
    toReadFromBy,
    toReadFromLike,
    toReadOnlyFromBy,
    toCreateIn,
    toCreateByProc,
    toDeleteFromBy
}