package model;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Currency;
import java.util.Date;
import java.util.Locale;


public class Room {

	private int quarto;
	private String nomeCompleto;
	private String telefone;
	private Date entrada;
	private Date saida;
	private float perNoite;
	private float valorTotal;
	
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	
	public Room(int quarto, String nomeCompleto, String telefone, String entrada, String saida, float perNoite) {
		
		this.quarto = quarto;
		this.nomeCompleto = nomeCompleto;
		this.telefone = telefone;
		try {
			this.entrada = sdf.parse(entrada);
			this.saida = sdf.parse(saida);
		}catch(ParseException e) {
			System.out.println(e);
		}
		this.perNoite = perNoite;
	}
	

	public void ValorTotal() {
		long estadia =  saida.getTime() - entrada.getTime();
		this.valorTotal = perNoite * estadia;
	}

	public Room(String linha) {
		df.setCurrency(Currency.getInstance(BRASIL));
		
		this.quarto = Integer.parseInt(linha.split(";")[0]);
		this.nomeCompleto = linha.split(";")[1];
		this.telefone = linha.split(";")[2];
		try {
			this.entrada = sdf.parse(linha.split(";")[3]);
			this.saida = sdf.parse(linha.split(";")[4]);
		}catch(ParseException e) {
			System.out.println(e);
		}
		this.perNoite = Float.parseFloat(linha.split(";")[5]);
		this.valorTotal = Float.parseFloat(linha.split(";")[6]);
	}

	@Override
	public String toString() {
		return quarto + " " + nomeCompleto + " " + telefone + " " 
				+ entrada + " " + saida + " " + perNoite + " " + valorTotal;
	}

	public String toCSV() {
		return quarto + ";" + nomeCompleto + ";" + telefone + ";" 
				+ entrada + ";" + saida + ";" + perNoite + ";" + valorTotal;
	}
}
