var cep = document.querySelector("#cep");
var senhaConfere = false

document.querySelector(".forms").addEventListener("click", function(event){
    event.preventDefault()
});

cep.addEventListener("keyup", () => {
    if(cep.value.length == 8) {
        fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        .then(res => {
            return res.json();
        })
        .then(local => {
            document.querySelector("#logradouro").value = local.logradouro;
            document.querySelector("#bairro").value = local.bairro;
            document.querySelector("#cidade").value = local.localidade;
            document.querySelector("#estado").value = local.uf;
        });
    };
});

function senhaTamanho(psw){
    if(psw.value.length < 8){
        alert("Senha deve conter ao menos 8 caracteris");
    }
}
function confirmar(cont) {
    let senha = document.querySelector("#senha").value;

    if(senha != cont.value){
        cont.style.borderBottom = "2px solid red";
        
    }else if(senha.length >= 8){
        senhaConfere = true;
        document.querySelector("#btn").disabled = false;
    }
}

function cadastrar() {  

    var cadastro = {
        "nome":document.querySelector("#nome").value,
        "email":document.querySelector("#email").value,
        "senha":document.querySelector("#senha").value,
        "telefone":document.querySelector("#telefone").value,
        "endereco":{
            "cep":document.querySelector("#cep").value,
            "logradouro":document.querySelector("#logradouro").value,
            "completed":document.querySelector("#complemento").value,
            "bairro":document.querySelector("#bairro").value,
            "cidade":document.querySelector("#cidade").value,
            "estado":document.querySelector("#estado").value
        }
    }
    console.log(cadastro);
}

