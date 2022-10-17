function carregar() {
    fetchSoliCompleta();
}

function toggleModal() {
    document.querySelector('.modal').classList.toggle('model');
}

function cadastrar() {
    fetchPostSoli();
}

const fetchSoliCompleta = () => {
    fetch('http://localhost:3000/solicitacoes/get/geral')
    .then(response => response.json())
    .then(soli => {
        soli.forEach(solicitacao => {
            let nLinha = document.querySelector('.linha').cloneNode(true);
            let option = document.querySelector('.op').cloneNode();

            nLinha.classList.remove('model');
            option.classList.remove('model');

            let coluna = nLinha.querySelectorAll('td');
            coluna[0].innerHTML = solicitacao.Num_Sol;
            coluna[1].innerHTML = solicitacao.Data_sol.slice(0, 10);
            coluna[2].innerHTML = solicitacao.Cod_Depto;
            coluna[3].innerHTML = solicitacao.Cod_Func;
            coluna[4].innerHTML = solicitacao.Cod_Produto;
            coluna[5].innerHTML = solicitacao.Qtde;
            coluna[6].innerHTML = solicitacao.valor;

            option.innerHTML = solicitacao.Data_sol.slice(0, 10);

            document.querySelector('.content').appendChild(nLinha);
            document.querySelector('#selectData').appendChild(option);
        })
    })
}

const fetchPostSoli = () => {
    let soli = {
        "n_sol":document.querySelector('#inpN_sol').value,
        "depto":document.querySelector('#inpDepto').value,
        "func":document.querySelector('#inpFunc').value,
        "prod":document.querySelector('#inpProd').value,
        "qtd":document.querySelector('#inpQtd').value,
        "total":document.querySelector('#inpValor').value
    }

    fetch('http://localhost:3000/solicitacoes/post/solic', {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        'body': JSON.stringify(soli)
    }).then((response) => { return response.json()})
    .then(resp => {
        if(resp.n_sol !== undefined) {
            alert("Solicitação Cadastrado com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao salvar Solicitação!");
        }
    })
}