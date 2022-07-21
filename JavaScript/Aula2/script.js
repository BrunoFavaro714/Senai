// var texto = document.getElementsByTagName("h1");

// console.log(texto);

// var titulo = document.getElementById("titulo");

// var aluno = {
//     nome: "Fulano",
//     matricula: 234578
// };

// titulo.innerHTML = `Nome: ${aluno.nome} </br> Matricula: ${aluno.matricula}`;


var linhas = document.querySelectorAll("tr");

linhas.forEach((linha) => {
    let temp = linha.querySelector("td");
    if(temp != null){
        if(temp.innerHTML == "Fulano da Silva")
        alert("encontrei");
    }
});
