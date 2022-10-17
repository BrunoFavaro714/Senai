
function  carregar() {
    fetchDepart();
}

function toggleModal() {
    document.querySelector('.modal').classList.toggle('model');
}

function cadastrar() {
    fetchPostDepart();
}

const fetchDepart = () => {
    fetch('http://localhost:3000/solicitacoes/get/depart')
    .then(response => response.json())
    .then(departamentos => {
        departamentos.forEach(depart => {
            let nLinha = document.querySelector('.linha').cloneNode(true);

            nLinha.classList.remove('model');

            let coluna = nLinha.querySelectorAll('td');
            coluna[0].innerHTML = depart.Cod_Depto;
            coluna[1].innerHTML = depart.Nome_Depto;
            coluna[2].innerHTML = `<button type="button" class="btn" onClick="excluir(${depart.Cod_Depto})">X</button>`

            document.querySelector('.content').appendChild(nLinha);
        })
    })
}

const fetchPostDepart = () => {
    let depart = {
        "cod_depart":document.querySelector('#inpCod').value,
        "nome_depart":document.querySelector('#inpNome').value
    }
    fetch('http://localhost:3000/solicitacoes/post/depart', {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        'body': JSON.stringify(depart)
    }).then((response) => { return response.json()})
    .then(resp => {
        if(resp.cod_depart !== undefined) {
            alert("Produto Cadastrado com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao salvar alterações !");
        }
    })
}

const excluir = (codDep) => {
    console.log(codDep);
    fetch(`http://localhost:3000/solicitacoes/delete/depart/${codDep}`, {
        'method': 'DELETE'
    })
    .then(res => { return res.json()})
    .then(resp => {
        console.log(resp)
        if(resp.affectedRows == 1){
            alert("Departamento Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao Excluir Departamento!");
        }
    })
}