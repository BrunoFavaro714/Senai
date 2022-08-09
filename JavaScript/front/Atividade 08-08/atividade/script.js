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
		let btnRemover = novoFuncionario.querySelector("#remover");
		let adimin = novoFuncionario.querySelector(".adm");

		novoFuncionario.classList.remove("modelo");

		novoFuncionario.querySelector("#nome").innerHTML = func.funcionario;
		novoFuncionario.querySelector("#cargo").innerHTML = func.cargo.nome;
		novoFuncionario.querySelector("#nivel").value = func.cargo.nível;
		novoFuncionario.querySelector("#check").checked = func.autorizado;
		if(func.cargo.nível != 3){
			btnRemover.classList.remove("modelo");
		}
		if((func.cargo.nome) == 'Analista' || (func.cargo.nome) == 'Desenvolvedor'){
			if(func.cargo.nível == 3){
				adimin.classList.remove("modelo");
			}
		}

		document.querySelector(".funcionarios").appendChild(novoFuncionario);
	});
};

function remover(e){
	e.parentNode.remove(e);
}