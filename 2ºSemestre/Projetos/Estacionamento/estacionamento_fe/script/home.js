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
    
    let cpfPart1 = inpCpf.value.split('.')
    let cpfPart2 = cpfPart1[2].split('-')

    let cpf = (cpfPart1[0]).toString();
    cpf += (cpfPart1[1]).toString();
    cpf += (cpfPart2[0]).toString();
    cpf += (cpfPart2[1]).toString();

    console.log(cpf)

    if(validarCpf(cpf) && validarPlaca(inpPlaca.value)){
        fetchCadastro();
    }else{
        alert("CPF invalido")
    }
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
            colunas[8].innerHTML = `<button type="button" id="saida_veiculo" onclick="saida('${cliente.cpf}', ${cliente.id_vaga})"><img src="../../assets/remover.png"/></button>`

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
            window.location.reload();
        }else{
            console.log("n ok");
        }
    });
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



const validarPlaca = (placa) => {
    if(placa.length == 7) {
        let modeloAntigo = /^[a-zA-Z]{3}[0-9]{4}$/;
        let modeloNovo = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
        let modeloMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
        
        if(modeloAntigo.test(placa) || modeloNovo.test(placa) || modeloMoto.test(placa)) return true;
    }

    return false;
}
const validarCpf = (cpf) => {
    if(cpf.length != 11) return false;

    if(cpf == "11111111111"|| 
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" ||
        cpf == "00000000000" 
     ) return false;

    let d1 = 0, d2 = 0;
    for(let i = 0; i <= 8; i++) {
        d1 += cpf[i] * (i+1);
        d2 += cpf[i] * i;
    }

    d1 %= 11;
    if(d1 == 10) d1 = 0;
    if(d1 != cpf[9]) return false;

    d2 += d1 * 9;
    d2 %= 11;
    if(d2 == 10) d2 = 0;
    if(d2 != cpf[10]) return false;

    return true;
}