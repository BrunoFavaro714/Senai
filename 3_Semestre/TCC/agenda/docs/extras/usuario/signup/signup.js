const url = "http://localhost:3000"



function registrar() {
    const email = document.querySelector("#email");
    const nome = document.querySelector("#nome");
    const senha = document.querySelector("#senha");
    let body = {
        "email": email.value,
        "nome": nome.value,
        "senha": senha.value
    }
    let options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    }
    fetch(url + "/create", options)
        .then(resp => { return resp.json() })
        .then(info => {
            console.log(info)


        })
}

// info = undefined -> não cadastrou, tem que retornar um erro, 
