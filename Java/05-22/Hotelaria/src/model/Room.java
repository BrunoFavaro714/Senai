package model;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;


public class Room {

	private int quarto;
	private String nomeCompleto;
	private String telefone;
	private Date entrada;
	private Date saida;
	private float perNoite;
	private float servicoQuarto;
	private float valorTotal;
	
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	
	public Room(int quarto, String nomeCompleto, String telefone, String entrada, String saida, float perNoite, float servicoQuarto, float valorTotal) {
		
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
		this.servicoQuarto = servicoQuarto;
		this.valorTotal = valorTotal;
	}
	
	
}
