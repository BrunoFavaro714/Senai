const inpCpf = document.querySelector('#cpfModal');
const inpNome = document.querySelector('#nomeModal');
const inpTel = document.querySelector('#telModal');
const inpPlaca = document.querySelector('#placaModal');
const inpTipo = document.querySelector('#tipoModal');
const inpMod = document.querySelector('#modModal');
const inpCor = document.querySelector('#corModal');
const inpVaga = document.querySelector('#vagaModal');

function preencher() {
    buscaVisao();
}

function cadastrar() {
    fetchCadastro();
}
function saida(cpf, id_vaga){
    fetchSaida(cpf, id_vaga);
}

function abrirModal() {
    document.querySelector(".modal").classList.toggle("model");
}
function fecharModal(){
    document.querySelector(".modal").classList.toggle("model");
}

function buscaVisao() {
    fetch('http://localhost:3000/estacionamento/get/vw_completa')
    .then(response => { return response.json(); })
    .then(clientes => {
        clientes.forEach(cliente => {
            let nLinha = document.querySelector('#linha').cloneNode(true);

            nLinha.classList.remove('model');

            let colunas = nLinha.querySelectorAll("td");
            colunas[0].innerHTML = cliente.cpf;
            colunas[1].innerHTML = cliente.nome;
            colunas[2].innerHTML = cliente.telefone;
            colunas[3].innerHTML = cliente.placa;
            colunas[4].innerHTML = cliente.tipo;
            colunas[5].innerHTML = cliente.modelo;
            colunas[6].innerHTML = cliente.cor;
            colunas[7].innerHTML = cliente.id_vaga;
            colunas[8].innerHTML = `<button type="button" id="saida_veiculo" onclick="saida(${cliente.cpf}, ${cliente.id_vaga})"><img src="../../assets/"></button>`

            document.querySelector("#container").appendChild(nLinha);
        })
    })
}

function fetchCadastro() {
    let cadastri = {
        "cpf":inpCpf.value,
        "nome":inpNome.value,
        "telefone":inpTel.value,
        "placa":inpPlaca.value,
        "tipo":inpTipo.value,
        "modelo":inpMod.value,
        "cor":inpCor.value,
        "id_vaga":inpVaga.value,
        "status":true
    }

    fetch('http://localhost:3000/estacionamento/post/cadastro', {
        "method": "POST",
        "headers":{
            "content-type": "application/json"
        },
        "body": JSON.stringify(cadastri)
    }).then( res => { return res.json()})
    .then(resp => {
        if(resp != undefined){
            console.log("ok");
        }else{
            console.log("n ok");
        }
    });

    fetch('http://localhost:3000/estacionamento/put/vaga', {
        "method": "PUT",
        "headers":{
            "content-type":"application/json"
        },
        "body": JSON.stringify(cadastri)
    }).then( res => { return res.json() })
    .then( resp => {
        if(resp != undefined){
            console.log("ok");
        }else{
            console.log("n ok");
        }
    });

    window.location.reload();
}

function fetchSaida(cpf, id_vaga) {
    let saida = {
        "cpf":cpf,
        "id_vaga":id_vaga,
        "status":false
    }

    fetch('http://localhost:3000/estacionamento/delete/cadastro', {
        "method": "DELETE",
        "headers":{
            "content-type": "application/json"
        },
        body: JSON.stringify(saida)
    }).then(res => { return res.json() })
    .then(resp => { 
        console.log(resp) ;
        window.location.reload();
    })
}