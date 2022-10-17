
function  carregar() {
    fetchGetProd();
}

function toggleModal() {
    document.querySelector('.modal').classList.toggle('model');
}

function cadastrar() {
    fetchPostProd();
}

const fetchGetProd = () => {
    fetch('http://localhost:3000/solicitacoes/get/produtos')
    .then((response) => { return response.json() })
    .then(produtos => {
        produtos.forEach(produto => {
            let nLinha = document.querySelector('.linha').cloneNode(true);

            nLinha.classList.remove('model');

            let coluna = nLinha.querySelectorAll('td');
            coluna[0].innerHTML = produto.Cod_Produto;
            coluna[1].innerHTML = produto.Nome_produto;

            document.querySelector('.content').appendChild(nLinha);
        })
    })
}

const fetchPostProd = () => {
    let prod = {
        "cod_prod":document.querySelector('#inpCod').value,
        "nome_prod":document.querySelector('#inpNome').value
    }
    fetch('http://localhost:3000/solicitacoes/post/produto', {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        'body': JSON.stringify(prod)
    }).then((response) => { return response.json()})
    .then(resp => {
        if(resp.cod_prod !== undefined) {
            alert("Produto Cadastrado com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao salvar alterações !");
        }
    })
}