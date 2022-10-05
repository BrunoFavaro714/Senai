const table = document.querySelector(".scroll-mother");
const modLinha = document.querySelector(".mod-linha");

const paginaAtual = document.querySelector(".here");
const mudarPagina = document.querySelector(".page");

function carregar(){
    fetchCompleto();
}

function fetchCompleto() {
    fetch('http://localhost:3000/locadora/locacoes')
    .then(res => { return res.json(); })
    .then(locacoes => {
        locacoes.forEach(locados => {
            let nLinha = modLinha.cloneNode(true);
            nLinha.classList.remove('model');

            let colunas = nLinha.querySelectorAll("td");
            //colunas[0].innerHTML = locados.id_loca; <--pegar cliente do clientes.js
            //colunas[1].innerHTML = locados.cod_cli; <--pegar telefones do clientes.js
            //colunas[2].innerHTML = locados.cod_fli; <-- pegar de fetch filmes
            colunas[3].innerHTML = locados.data_loca.slice(0,10);
            //colunas[4].innerHTML = locados.data_devo <--calcular multa

            table.appendChild(nLinha);
        });
    });
}

