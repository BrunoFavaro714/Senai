package cadastroAluno;

public class Cadastros {
	
	public int id;
	public String nome;
	public String sobrenome;
	public int idade;
	public int notas;
	
	Cadastros(){}
	
	Cadastros(int id, String nome, String sobrenome, int idade, int notas){
		this.id = id;
		this.nome = nome;
		this.idade =idade;
		this.notas = notas;
		this.sobrenome = sobrenome;
	}
	
	public String tabing() {
		
		return null;
	}
}
