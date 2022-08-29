function alunos(){
    fetch("http://localhost:5500/academia/alunos")
    .then((res) => {
        return res.json();
    }).then((alunos) => {
        alunos.forEach((aluno) => {
            console.log(aluno);
            let newAluno = document.querySelector(".alunos").cloneNode(true);

            newAluno.classList.remove("modelo")

            newAluno.querySelector("#id").value = aluno.id_aluno;
            newAluno.querySelector("#nome").value = aluno.nome;
            newAluno.querySelector("#sexo").value = aluno.sexo;
            let data = new Date(aluno.nascimento);
            newAluno.querySelector("#nasci").value = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;
            newAluno.querySelector("#peso").value = aluno.peso;
            newAluno.querySelector("#telefone").value = aluno.telefone;

            document.querySelector(".main").appendChild(newAluno);
        });
    });
}

function retorno(){
    window.location.href="../home/home.html";
}