package cadastroAluno;

public class Cadastros {
	
	public int id;
	public String nome;
	public String sobrenome;
	public int idade;
	public int notas;
	public int cont;
	
	Cadastros(){}
	
	Cadastros(int id, String nome, String sobrenome, int idade, int notas, int cont){
		this.id = id;
		this.nome = nome;
		this.idade =idade;
		this.notas = notas;
		this.sobrenome = sobrenome;
		this.cont = cont;
	}
	
	public String tabing() {
		
		return null;
	}
}



/*
	aluno[i] = new Cadastros();
	aluno[i].id = (i+1);
	aluno[i].nome = input.next();
	aluno[i].sobrenome = input.next();
	ano = input.next();
	dataNasc = Integer.parseInt(ano);
	aluno[i].idade = data - dataNasc;
	vagas++;
 */
