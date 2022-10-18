const inpTipo = document.querySelector("#tipoModal");
const inpValor = document.querySelector("#valorModal");

function carregar() {
    preencher();
}

function cadastrar(){
    enviar();
}

function abrirModal() {
    document.querySelector(".modal").classList.toggle("model");
}
function fecharModal() {
    document.querySelector(".modal").classList.toggle("model");
}

function preencher() {
    fetch('http://localhost:3000/estacionamento/get/vagas')
    .then(resp => { return resp.json()})
    .then(vagas => {
        vagas.forEach(vaga => {
            let nLinha = document.querySelector('#linha').cloneNode(true);
            let livre;

            nLinha.classList.remove('model');

            if(vaga.status == 0){
                livre = 'Ocupado';
            }else{
                livre = 'livre';
            }

            let colunas = nLinha.querySelectorAll("td");
            colunas[0].innerHTML = vaga.id_vaga;
            colunas[1].innerHTML = livre
            colunas[2].innerHTML = vaga.tipo;
            colunas[3].innerHTML = vaga.valor_hora;

            document.querySelector("#container").appendChild(nLinha);
        })
    })
}

function enviar() {
    let info = {
        "tipo":inpTipo.value,
        "valor":inpValor.value
    }
    fetch('http://localhost:3000/estacionamento/cadastrar/vagas', {
        "method": "POST",
        "headers":{
            "content-type": "application/json"
        },
        "body": JSON.stringify(info)
    }).then(res => { return res.json() })
    .then(resp => {
        if(resp !== undefined) {
            alert("OK!");
        }else{
            alert("Error!");
        }
    })
}