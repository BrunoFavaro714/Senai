package modelo;

import java.util.Date;


public class Pessoa {
	
	private String nome;
	private String telefone;
	private Date nascimento;
	
	public Pessoa(String nome, String telefone, Date nascimento) {
		this.nome = nome;
		this.telefone = telefone;
		this.nascimento = nascimento;
	}

	public Pessoa() {
	}
	@SuppressWarnings("deprecation")
	private int idade(Date nascimento) {
		Date hoje = new Date();
		int idade = hoje.getYear() - nascimento.getYear();
		int mes = hoje.getMonth() - nascimento.getMonth();
		if(mes < 1) {
			idade--;
		}
		return idade;
	}
	@Override
	public String toString() {
		return nome + " " + telefone + " " + idade(nascimento);
	}
	
}
