const modLinhaCred = document.querySelector(".linha-cred");
const modLinhaDebi = document.querySelector(".linha-debi");
const tableCredito = document.querySelector(".table-credito");
const tableDebito = document.querySelector(".table-debito");

const select = document.querySelector("#datas");
const selectedData = document.querySelector("#selected-data");

var selctOptions = [];

function carregar() {
    fetchCompleto();

    opicoes()
}

function fetchCompleto() {
    fetch('http://localhost:3000/livrocaixa/lancamentos')
    .then(res => {return res.json()})
    .then(lancamentos => {
        selctOptions[0] = lancamentos[0].data;
        let i = 1;
        lancamentos.forEach(lancamento => {
            
            
            if(lancamento.tipo == 'D'){
                let linhaDebi = modLinhaDebi.cloneNode(true);
                linhaDebi.classList.remove('modelo');

                let colunasDebi = linhaDebi.querySelectorAll("td");
                colunasDebi[0].innerHTML = lancamento.id;
                colunasDebi[1].innerHTML = lancamento.data.slice(0, 10);
                colunasDebi[2].innerHTML = lancamento.descricao;
                colunasDebi[3].innerHTML = lancamento.valor;
                colunasDebi[4].innerHTML = lancamento.tipo;

                tableDebito.appendChild(linhaDebi);
            }else if(lancamento.tipo == 'C'){
                let linhaCred = modLinhaCred.cloneNode(true);
                linhaCred.classList.remove('modelo');

                let colunasCred = linhaCred.querySelectorAll("td");
                colunasCred[0].innerHTML = lancamento.id;
                colunasCred[1].innerHTML = lancamento.data.slice(0, 10);
                colunasCred[2].innerHTML = lancamento.descricao;
                colunasCred[3].innerHTML = lancamento.valor;
                colunasCred[4].innerHTML = lancamento.tipo;

                tableCredito.appendChild(linhaCred);
            }
            
            if(lancamento.data != selctOptions[i-1]){
                selctOptions[i] = lancamento.data;
                i++;
            }
        });
    });
}

function fetchFiltrado() {
    fetch(`http://localhost:3000/livrocaixa/lancamentos/${select.value}`)
    .then(res => {return res.json()})
    .then(lancamentos => {
        lancamentos.forEach(lancamento => {
            if(lancamento.tipo == 'D'){
                let linhaDebi = modLinhaDebi.cloneNode(true);
                linhaDebi.classList.remove('modelo');

                let colunasDebi = linhaDebi.querySelectorAll("td");
                colunasDebi[0].innerHTML = lancamento.id;
                colunasDebi[1].innerHTML = lancamento.data.slice(0, 10);
                colunasDebi[2].innerHTML = lancamento.descricao;
                colunasDebi[3].innerHTML = lancamento.valor;
                colunasDebi[4].innerHTML = lancamento.tipo;

                tableDebito.appendChild(linhaDebi);
            }else if(lancamento.tipo == 'C'){
                let linhaCred = modLinhaCred.cloneNode(true);
                linhaCred.classList.remove('modelo');

                let colunasCred = linhaCred.querySelectorAll("td");
                colunasCred[0].innerHTML = lancamento.id;
                colunasCred[1].innerHTML = lancamento.data.slice(0, 10);
                colunasCred[2].innerHTML = lancamento.descricao;
                colunasCred[3].innerHTML = lancamento.valor;
                colunasCred[4].innerHTML = lancamento.tipo;

                tableCredito.appendChild(linhaCred);
            }
        })
    })
}

function opicoes() {
    selctOptions.forEach(opicao => {
        let nOption = selectedData.cloneNode();

        nOption.innerHTML = opicao;

        document.querySelector("#datas").appendChild(nOption);
    })
}

function limpar() {
    console.log("ok")
    let tableCredRows = tableCredito.querySelectorAll('tr');
    let tableDebiRows = tableDebito.querySelectorAll('tr');

    for(let i = tableCredRows.length; i > 2; i-- ){
        tableCredito.deleteRow(i-1)
    }
    for(let i = tableDebiRows.length; i > 2; i--){
        tableDebito.deleteRow(i-1)
    }

    fetchFiltrado()
}