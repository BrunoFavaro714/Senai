const clientes = (lista) => {
    lista.forEach(e => {
        e.telefones = [];
        let tel = {};
        tel.tipo = e.tipo;
        tel.numero = e.telefone;
        e.telefones.push(tel);

        delete e.tipo;
        delete e.telefone;
    });

    let aux = [];
    let lip = 0;
    aux.push(lista[lip]);
    for(i = 1; i < lista.length; i++) {
        if(lista[i].cod_cli == lista[i-1].cod_cli) {
            let tel = {};   
            tel.tipo = lista[i].telefones[0].tipo;
            tel.numero = lista[i].telefones[0].numero;
            aux[lip].telefones.push(tel);
        }else{
            aux.push(lista[i]);
            lip++
        }
    }

    return aux;
}

module.exports = {
    clientes
}
