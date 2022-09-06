const listaProd = document.querySelector("#listaProd")
const linhamod = document.querySelector(".linhamod");
const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");

const inpCod = document.querySelector("#codigo");
const inpNome = document.querySelector("#nome");
const inpQntd = document.querySelector("#quantidade");
const inpValor = document.querySelector("#valor");

fetch("http://localhost:3000/produtos")
.then(res => {return res.json()})
.then(produtos => {
    produtos.forEach(produto => {
        let linha = linhamod.cloneNode(true);
        linha.classList.remove("model");

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = produto.cod;
        colunas[1].innerHTML = produto.nome;
        colunas[2].innerHTML = produto.qntd;
        colunas[3].innerHTML = "R$ " + produto.preco;



        linha.querySelector("#exclui").addEventListener("click", () =>{
            modalExcluir.classList.remove("model");
            modalExcluir.querySelector("#cod").innerHTML = produto.cod;
        })

        linha.querySelector("#edita").addEventListener("click", () =>{
            modalEditar.classList.remove("model");
            inpCod.value = produto.cod;
            inpNome.value = produto.nome;
            inpQntd.value = produto.qntd;
            inpValor.value = produto.preco;
        })

        listaProd.appendChild(linha);
    });
});

function fecharExcluir() {
    modalExcluir.classList.add("model");
}

function fecharEditar() {
    modalEditar.classList.add("model");
}

function editarProduto() {
    let produto = {
        "cod": inpCod.value,
        "nome": inpNome.value,
        "qntd": inpQntd.value,
        "valor": inpValor.value
    }

    fetch("http://localhost:3000/produto", {
        "method":"PUT",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(produto)
    })
    .then(res => {return res.json()})
    .then(resp => {
        if(resp.cod != undefined){
            alert("Produto Alterado com Sucesso");
            location.reload();
        }else {
            alert("Falha ao Salvar Alterações");
        }
    });
}

function excluirProduto(){
    let data = {
        "cod":document.querySelector("#cod").innerHTML
    }

    fetch("http://localhost:3000/produto", {
        "method":"DELETE",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(produto)
    })
    .then(res => {return res.json()})
    .then(resp => {
        if(resp.cod != undefined){
            alert("Produto Excluido com Sucesso");
            location.reload();
        }else {
            alert("Falha ao Excluir Produto");
        }
    });
}