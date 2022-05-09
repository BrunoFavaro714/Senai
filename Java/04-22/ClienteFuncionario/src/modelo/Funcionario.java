package modelo;

import java.util.Date;

public class Funcionario extends Pessoa {

	private int matricula;
	private double comicao;
	private String senha;
	
	
	public Funcionario() {
	}
	

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public Funcionario(String nome, String telefone, Date nascimento) {
		super(nome, telefone, nascimento);
	}

	public int getMatricula() {
		return matricula;
	}

	public void setMatricula(int matricula) {
		this.matricula = matricula;
	}

	public double getComicao() {
		return comicao;
	}

	public void setComicao(double comicao) {
		this.comicao = comicao;
	}

	@Override
	public String toString() {
		return matricula + " " + super.toString() + " " + String.format("R$%.2f", comicao);
	}
	
	
}
