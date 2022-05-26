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
	
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	
	public Room(String quarto, String nomeCompleto, String telefone, String entrada, String saida, String perNoite) {
		
		df.setCurrency(Currency.getInstance(BRASIL));
		
		this.quarto = Integer.parseInt(quarto);
		this.nomeCompleto = nomeCompleto;
		this.telefone = telefone;
		try {
			this.entrada = sdf.parse(entrada);
			this.saida = sdf.parse(saida);
			this.perNoite = Float.parseFloat(df.parse(perNoite).toString());
		}catch(ParseException e) {
			System.out.println(e);
		}
		
	}
	public Room(String linha) {
		df.setCurrency(Currency.getInstance(BRASIL));
		
		this.quarto = Integer.parseInt(linha.split(";")[0]);
		this.nomeCompleto = linha.split(";")[1];
		this.telefone = linha.split(";")[2];
		try {
			this.entrada = sdf.parse(linha.split(";")[3]);
			this.saida = sdf.parse(linha.split(";")[4]);
			this.perNoite = Float.parseFloat(df.parse(linha.split(";")[5]).toString());
		}catch(ParseException e) {
			System.out.println(e);
		}
		
		
	}
	public Room(int quarto) {
		this.quarto = quarto;
	}
	
	
	@SuppressWarnings("deprecation")
	public String valorTotal() {
		int estadia;
		if(entrada.getMonth()/1 == saida.getMonth()/1) {
			estadia =  saida.getDate() - entrada.getDate();
		}else {
			if(entrada.getMonth()%2 != 0) {
				if(entrada.getMonth() == 2) {
					estadia = saida.getDate() + (30-entrada.getDate());
				}else if(entrada.getYear()%4 == 0) {
					estadia = saida.getDate() + (29-entrada.getDate());
				}else {
					estadia = saida.getDate() + (28-entrada.getDate());
				}
			}else {
				estadia = saida.getDate() + (31-entrada.getDate());
			}
		}
		
		return String.format("%.2f",perNoite * estadia);
	}
	
	

	public int getQuarto() {
		return quarto;
	}
	public String getQuarto(String s) {
		return String.valueOf(quarto);
	}
	public void setQuarto(int quarto) {
		this.quarto = quarto;
	}
	public String getNomeCompleto() {
		return nomeCompleto;
	}
	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEntrada(String s) {
		return sdf.format(entrada);
	}
	public void setEntrada(Date entrada) {
		this.entrada = entrada;
	}
	public String getSaida(String s) {
		return sdf.format(saida);
	}
	public void setSaida(Date saida) {
		this.saida = saida;
	}
	public String getPerNoite(String s) {
		return String.format("%.2f", perNoite);
	}
	public void setPerNoite(float perNoite) {
		this.perNoite = perNoite;
	}
	
	
	@Override
	public String toString() {
		return quarto + " " + nomeCompleto + " " + telefone + " " 
				+ entrada + " " + saida + " " + perNoite + " " + valorTotal();
	}

	public String toCSV() {
		return quarto + ";" + nomeCompleto + ";" + telefone + ";" 
				+ sdf.format(entrada) + ";" + sdf.format(saida) + ";" + perNoite + "\r\n";
	}
}
