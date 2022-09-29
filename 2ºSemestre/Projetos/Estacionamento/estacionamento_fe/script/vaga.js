const inpTipo = document.querySelector("#tipo");
const inpValor = document.querySelector("#valor");

function enviar() {
    let info = {
        "tipo":inpTipo.value,
        "valor":inpValor.value
    }

    fetch('http://localhost:3000/estacionamento/cad_vaga', {
        "method": "POST",
        "headers":{
            "content-type": "application/json"
        },
        "body": JSON.stringify(info)
    }).then(res => { return res.json() })
    .then(resp => {
        if(resp !== undefined) {
            alert("OK!");
        }else{
            alert("Error!");
        }
    })
}