var tr = document.createElement("tr");
var td = document.createElement("td");

let funcionario = td.append("Claudio");
let cargo = td.append("OL");
let salario = td.append("1000");

tr.appendChild(funcionario);
tr.appendChild(cargo);
tr.appendChild(salario);

document.querySelector("tbody").appendChild(tr);