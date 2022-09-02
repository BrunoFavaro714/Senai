function carregar(){
    fetch("http://localhost:3000/duplicatas/clientes")
    .then(res => {return res.json()})
    .then(clientes => {
        clientes.forEach(cliente => {
            duplicarClientes(cliente)
        });
    });
}
function duplicarClientes(info){
    let nCliente = document.querySelector(".cliente").cloneNode(true);

    nCliente.classList.remove("model");

    nCliente.querySelector("#codCli").value = info.cod_cli;
    nCliente.querySelector("#nome").value = info.nome;
    nCliente.querySelector("#endereco").value = info.endereco;
    nCliente.querySelector("#bairro").value = info.bairro;
    nCliente.querySelector("#cidade").value = info.cidade;
    nCliente.querySelector("#uf").value = info.uf;

    document.querySelector("#tipoCli").value = info.telefones.tipo;
    document.querySelector("#telCli").value = info.telefones.numero;

    document.querySelector(".clientes").appendChild(nCliente);
}
function showModal(){
    document.querySelector(".modal").classList.toggle("model");
}