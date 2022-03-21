package modelo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Aparelho {

	public String nome;
	public String tipoExercicio;
	public String grupoMuscular;
	public Date dataAquisicao;
	public double valorAquisicao;
	private static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	
	public Aparelho() {
	}

	public Aparelho(String nome, String tipoExercicio, String grupoMuscular, Date dataAquisicao, double valorAquisicao) throws ParseException {
		this.nome = nome;
		this.tipoExercicio = tipoExercicio;
		this.grupoMuscular = grupoMuscular;
		this.dataAquisicao = dataAquisicao;
		this.valorAquisicao = valorAquisicao;
	}
	public int tempoUso() {
		Date data = new Date();
		@SuppressWarnings("deprecation")
		int anoDif = data.getYear() - dataAquisicao.getYear();
		return anoDif;
	}
	public double depreciacao() {
		
		return 0;
	}
	public double valorDeprecicacao() {
		
		return 0;
	}
	public String paraString() {
		
		return nome + " " + tipoExercicio + " " + grupoMuscular + " " + tempoUso() + " " + String.format("R$%.2f",valorAquisicao);
	}
}
