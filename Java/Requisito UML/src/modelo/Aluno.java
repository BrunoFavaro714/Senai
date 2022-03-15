package modelo;

import java.text.SimpleDateFormat;
import java.util.Date;
	

public class Aluno {

	public int id;
	public String nome;
	public String sobrenome;
	public Date dataNas;
	public Nota[] notas = new Nota[4];
	
	public int idade;
	
	@SuppressWarnings("deprecation")
	public int CalcIdade() {
		Date hoje = new Date();
		idade = hoje.getYear() - dataNas.getYear();
		return idade;
	}
	public String obterConceito() {
		
	return null;
	}
	public String formatAluno() {
		SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	return id + " " + nome + " " +  sobrenome + " " + idade;
	}
	public Aluno(int id, String nome, String sobrenome, Date dataNas) {
		this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.dataNas = dataNas;
	}
	public String formatMedia() {

	return id + " " + nome + " " +  sobrenome + "\n" + notas[0] + "\n" + notas[1] + "\n" + notas[2] + "\n" + notas[3];
	}
}
