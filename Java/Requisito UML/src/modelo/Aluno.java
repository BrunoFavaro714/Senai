package modelo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;
	

public class Aluno {

	public int id;
	public String nome;
	public String sobrenome;
	public Date dataNas;
	public Nota[] notas = new Nota[4];
	
	@SuppressWarnings("deprecation")
	public int CalcIdade() {
		Date hoje = new Date();
		return hoje.getYear() - dataNas.getYear();	
	}
	public String obterConceito() {
	return null;
	}
	public String formatAluno() {
	return null;
	}
}
