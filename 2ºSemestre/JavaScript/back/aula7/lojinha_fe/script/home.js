const modLinhaCred = document.querySelector(".linha-cred");
const modLinhaDebi = document.querySelector(".linha-debi");
const tabelCredito = document.querySelector(".tabel-credito");
const tabelDebito = document.querySelector(".tabel-debito");

const data = document.querySelector("#datas");

fetch('http://localhost:3000/livrocaixa/lancamentos')
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

            tabelDebito.appendChild(linhaDebi);
        }else if(lancamento.tipo == 'C'){
            let linhaCred = modLinhaCred.cloneNode(true);
            linhaCred.classList.remove('modelo');

            let colunasCred = linhaCred.querySelectorAll("td");
            colunasCred[0].innerHTML = lancamento.id;
            colunasCred[1].innerHTML = lancamento.data.slice(0, 10);
            colunasCred[2].innerHTML = lancamento.descricao;
            colunasCred[3].innerHTML = lancamento.valor;
            colunasCred[4].innerHTML = lancamento.tipo;

            tabelCredito.appendChild(linhaCred);
        }
    });
});
