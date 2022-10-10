const deleteDepart = (params) => {
    return `DELETE FROM Departamentos WHERE Cod_Depto=${params.cod_depart}`
}

module.exports = {
    deleteDepart
}