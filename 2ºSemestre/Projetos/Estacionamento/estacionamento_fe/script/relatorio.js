

function carregar() {
    fetchCompleto();
}

function fetchCompleto() {
    fetch('http://localhost:3000/estacionamento/get/relatorio')
    .then(resp => { return resp.json()})
    .then(lista => { 
        lista.forEach(item => {
            let nLinha = document.querySelector('#linha').cloneNode(true);

            nLinha.classList.remove('model');

            let coluna = nLinha.querySelectorAll('td');
            coluna[0].innerHTML = item.cpf;
            coluna[1].innerHTML = (item.entrada).slice(0,10) + " " + (item.entrada).slice(11,16);
            if(item.saida != null){
                coluna[2].innerHTML = (item.saida).slice(0,10) + " " + (item.saida).slice(11,16);
            }else{
                coluna[2].innerHTML = item.saida;
            }
            coluna[3].innerHTML = item.placa;
            coluna[4].innerHTML = item.id_vaga;
            coluna[5].innerHTML = item.valor_total;

            document.querySelector("#container").appendChild(nLinha);
        })
    })
}