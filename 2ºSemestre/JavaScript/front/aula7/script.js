


function fichas(){
    fetch("http://localhost:5500/academia/fichas")
    .then((res) => {
        return res.json();
    }).then((fichas) => {
        fichas.forEach((ficha) => {
            console.log(ficha);
            let newFichas = document.querySelector(".fichas").cloneNode(true);

            newFichas.querySelector("#id_aluno").value = ficha.id_aluno;
            newFichas.querySelector("#dia").value = ficha.dia_semana;
            newFichas.querySelector("#id_exer").value = ficha.id_exercicio;
            newFichas.querySelector("#serie").value = ficha.serie;

            document.querySelector(".main").appendChild(newFichas);
        });
    });
}