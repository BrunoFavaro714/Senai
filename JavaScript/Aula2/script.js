// var texto = document.getElementsByTagName("h1");

// console.log(texto);

// var titulo = document.getElementById("titulo");

// var aluno = {
//     nome: "Fulano",
//     matricula: 234578
// };

// titulo.innerHTML = `Nome: ${aluno.nome} </br> Matricula: ${aluno.matricula}`;


var linhas = document.querySelectorAll("tr");

var btBusca = document.querySelector("button");

var busca = document.querySelector("#busca");

btBusca.addEventListener("click", buscarNome)

busca.addEventListener("keyup", buscarNome)

function buscarNome(){

    let encontrei = false;
    linhas.forEach((linha) => {
        let temp = linha.querySelector("td");
        if(temp != null){
            // if(temp.innerHTML.toLowerCase() == busca.value.toLowerCase()){
            //     alert("encontrei");
            //     encontrei = true;
            //     linha.style.fontWeight = "bold";
            //     linha.style.color = "pink";
            // }

            //===================================================

            // if(temp.innerHTML.toLowerCase().includes(busca.value.toLowerCase())){
            //     linha.style.display = "table-row"
            // }else{
            //     linha.style.display = "none";
            // }

            //===================================================

            if(linha.innerHTML.toLowerCase().includes(busca.value.toLowerCase())){
                linha.style.display = "table-row";
            }else{
                linha.style.display = "none";
            }
        }
    });
}
