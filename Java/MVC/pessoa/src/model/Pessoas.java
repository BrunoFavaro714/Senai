package model;

import java.util.Date;

public class Pessoas {

	private String v1;
	private int v2;
	private Date hoje = new Date();
	
	public Pessoas(String entrada) {
		v1 = entrada.split(";")[0];
		v2 = Integer.parseInt(entrada.split(";")[1]);
	}
	
	public int idade(){
		
		@SuppressWarnings("deprecation")
		int idade = 1900 + (hoje.getYear() - v2);
		
		return idade;
	}
	public String pessoa() {
		
		return v1 + ";" + idade();
	}
}
