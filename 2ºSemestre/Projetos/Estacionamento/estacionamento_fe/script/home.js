const time = new Date().toISOString().slice(0, 10);

const body = document.querySelector("#container");

function preencher(){
    fetch('http://localhost:3000/estacionamento/completa')
    .then(res => { return res.json()})
    .then(lista => {
        lista.forEach(item => {
            let nLinha = document.querySelector("#linha").cloneNode(true);

            let colunas = nLinha.querySelectorAll("td");
            colunas[0].innerHTML = item.cpf;
            colunas[1].innerHTML = item.nome;
            colunas[2].innerHTML = item.telefone;
            colunas[3].innerHTML = item.placa;
            colunas[4].innerHTML = item.tipo;
            colunas[5].innerHTML = item.modelo;
            colunas[6].innerHTML = item.cor;
            colunas[7].innerHTML = item.id_vaga;

            body.appendChild(nLinha);
        })
    })
}

function cadastrar() {
    let info = {
        "cpf":document.querySelector("#cpfModal").value,
        "nome":document.querySelector("#nomeModal").value,
        "telefone":document.querySelector("#telModal").value,
        "placa":document.querySelector("#placaModal").value,
        "tipo":document.querySelector("#tipoModal").value,
        "modelo":document.querySelector("#modModal").value,
        "cor":document.querySelector("#corModal").value,
        "entrada":time,
        "idVaga":document.querySelector("#vagaModal").value
    }

    fetch('http://localhost:3000/estacionamento/cadastro', {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(info)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp !== undefined){
            alert("Cadastrado Com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao cadastrar");
        }
    })
}