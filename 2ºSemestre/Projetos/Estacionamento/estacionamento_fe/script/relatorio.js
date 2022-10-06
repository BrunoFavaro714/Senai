

function carregar() {
    fetchCompleto();
}

function fetchCompleto() {
    fetch('http://localhost:3000/estacionamento/relatorio')
    .then(resp => { return resp.json()})
    .then(lista => { 
        lista.forEach(item => {
            let nLinha = document.querySelector('#linha').cloneNode(true);

            nLinha.classList.remove('model');

            let coluna = nLinha.querySelectorAll('td');
            coluna[0].innerHTML = item.cpf;
            coluna[1].innerHTML = item.entrada;
            coluna[2].innerHTML = item.saida;
            coluna[3].innerHTML = item.placa;
            coluna[4].innerHTML = item.id_vaga;

            document.querySelector("#container").appendChild(nLinha);
        })
    })
}