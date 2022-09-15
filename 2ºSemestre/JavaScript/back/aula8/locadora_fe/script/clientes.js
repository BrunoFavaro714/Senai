const table = document.querySelector(".scroll-mother");
const modLinha = document.querySelector(".mod-linha");

const paginaAtual = document.querySelector(".here");
const mudarPagina = document.querySelector(".page");

function carregar(){
    fetchCompleto();
}

function fetchCompleto() {
    fetch('http://localhost:3000/locadora/clientes')
    .then(res => { return res.json(); })
    .then(clientes => {
        clientes.forEach(cliente => {
            let nLinha = modLinha.cloneNode(true);
            nLinha.classList.remove('model');

            let colunas = nLinha.querySelectorAll("td");
            colunas[0].innerHTML = cliente.cod_cli;
            colunas[1].innerHTML = cliente.nome;
            colunas[2].innerHTML = cliente.endereco;
            colunas[3].innerHTML = cliente.telefones;

            table.appendChild(nLinha);
        });
    });
}

function mudarDevolucoes(){
    window.location.href = './devolucoes.html';
}