var funcionarios = [
	{
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nível":2
		},
		"autorizado":true
	},		
	{
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nível":2
		},
		"autorizado":true
	},
	{
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nível":1
		},
		"autorizado":false
	},
	{
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nível":3
		},
		"autorizado":true
	},
	{
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nível":3
		},
		"autorizado":false
	},	
	{
		"funcionario":"Sandro Rosário",
		"cargo":{
			"nome":"Técnico",
			"nível":3
		},
		"autorizado":true
	}
];

var funcionario = document.querySelector(".funcionario");

function carregar() {
	funcionarios.forEach(func => {
		let novoFuncionario = funcionario.cloneNode(true);

		novoFuncionario.classList.remove("modelo");

		novoFuncionario.querySelector("#nome").innerHTML = func.funcionario;
		novoFuncionario.querySelector("#cargo").innerHTML = func.cargo.nome;
		novoFuncionario.querySelector("#nivel").value = func.cargo.nível;
		if(func.autorizado){
			novoFuncionario.querySelector("#check").checked;
		}

		document.querySelector(".funcionarios").appendChild(novoFuncionario);
	});
};