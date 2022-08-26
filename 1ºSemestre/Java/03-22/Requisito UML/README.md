# 	
	-> Modelo:
		->Aluno:
			-+ calcular idade;
				-- >> Data Nascimento
				-- << Idade
				
			-+ Obter conceito;
				-- >> Media
				-- << Conceito
				
			-+ Retornar String;
				-- << Formatação
				
		->Nota:
			-+ Obter Media;
				-- >> Nota, Peso
				-- << Media
				
			-+ Retornar String;
				-- << Formatação
	-> Visão:
		->Principal:
			-+ main;
				-- >> Opção
				-- <> menu
				
			-+ Cadastrar Aluno;
				-- >> Dados
				
			-+ Cadastrar Nota;
				-- >> Componente, Notas
				
			-+ Listar Aluno;
				-- << Aluno(Formatação)
				
			-+ Listar Nota;
				-- << Nota(Formatação)
				
			-+ Obter Aluno - Nome/ID;
				-- >> Metodo, Busca
				-- << Lista
				
			-+ Lista Aprovado;
				-- << Aprovados
				
			-+ Lista Reprovado;
				-- << Reprovados
	