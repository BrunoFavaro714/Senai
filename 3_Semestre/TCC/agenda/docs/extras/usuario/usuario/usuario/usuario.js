
const url = "http://localhost:3000"
var dados = {}


function load() {

    dados = JSON.parse(window.localStorage.getItem("body"))



    document.querySelector("#nome").value = dados.nome

    document.querySelector("#email").value = dados.email

    // document.querySelector("#id").value = dados.id

    console.log(dados)
}



function editar() {

    document.querySelector("#nome").disabled = false

    document.querySelector("#senha").disabled = false

    document.querySelector("#email").disabled = false

    document.querySelector("#editar").classList.add("ocultar")

    document.querySelector("#salvar").classList.remove("ocultar")

}



function salvar() {
    document.querySelector("#nome").disabled = true

    document.querySelector("#senha").disabled = true

    document.querySelector("#email").disabled = true

    document.querySelector("#editar").classList.remove("ocultar")

    document.querySelector("#salvar").classList.add("ocultar")

    const email = document.querySelector("#email");
    const nome = document.querySelector("#nome");

    // const senha = document.querySelector("#senha");

    let body = {
        "id": dados.id,
        "email": email.value,
        "nome": nome.value,
        //"senha": senha.value
    }
    let options = {
        "method": "UPDATE",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    }

    //está faltando colocar o ID na frente do "/update"
    fetch(url + "/update", options)
        .then(resp => { return resp.json() })
        .then(info => {
            console.log(info)


        })
}