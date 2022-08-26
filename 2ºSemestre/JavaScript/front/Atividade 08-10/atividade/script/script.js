var usuarios = [
    {
        "id":1,
        "usuario":"a",
        "senha":"123",
        "icon":""
    },
    {
        "id":2,
        "usuario":"b",
        "senha":"456",
        "icon":""
    },
    {
        "id":3,
        "usuario":"c",
        "senha":"789",
        "icon":""
    }
]

var produtos = [
    {
        "imagem":"",
        "nome":"produto 1",
        "preco":"R$ 150.00"
    },
    {
        "imagem":"",
        "nome":"produto 2",
        "preco":"R$ 500.00"
    },
    {
        "imagem":"",
        "nome":"produto 3",
        "preco":"R$ 100.00"
    },
    {
        "imagem":"",
        "nome":"produto 4",
        "preco":"R$ 10.00"
    },
    {
        "imagem":"",
        "nome":"produto 5",
        "preco":"R$ 50.00"
    },
    {
        "imagem":"",
        "nome":"produto 6",
        "preco":"R$ 157.76"
    }
]

function logar() {
    let inpUser = document.querySelector("#user");
    let inpPsw = document.querySelector("#psw");

    let login = false;

    usuarios.forEach(user => {
        if(user.usuario == inpUser.value && user.senha == inpPsw.value){
            window.location.href = "./index.html";
            login = true;
        }
    }); 

    if(!login){
        alert("Usuario ou Senha incorreta!");
    }

    inpUser.value = null;
    inpPsw.value = null;
}


function carregar() {
    let produto = document.querySelector(".produto");

    produtos.forEach(prod => {
        let novoProduto = produto.cloneNode(true);

        novoProduto.classList.remove("modelo");

        novoProduto.querySelector("#imagem").src = prod.imagem;
        novoProduto.querySelector("#nome").innerHTML = prod.nome;
        novoProduto.querySelector("#preco").innerHTML = prod.preco;

        document.querySelector(".produtos").appendChild(novoProduto);
    });
}