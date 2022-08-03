function adiciolarCadastro() {
    const linha = document.createElement("tr");
    const tabela = document.querySelector("tbody");

    let nome = document.querySelector("#nome");
    let cargo = document.querySelector("#cargo");
    let salario = document.querySelector("#salario");

    var nomeT = document.createElement("td");
    var cargoT = document.createElement("td");
    var salarioT = document.createElement("td");

    nomeT.id = "tNome";
    cargoT.id = "tCargo";
    salarioT.id = "tSalario";

    nomeT.innerHTML = nome.value;
    cargoT.innerHTML = cargo.value;
    salarioT.innerHTML = "R$ " + salario.value;

    linha.appendChild(nomeT);
    linha.appendChild(cargoT);
    linha.appendChild(salarioT);

    tabela.appendChild(linha);

    nome.value = null;
    cargo.value = null;
    salario.value = null;
}