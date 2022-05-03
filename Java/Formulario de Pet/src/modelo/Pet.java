package modelo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Pet {

	private int id;    
	private String especie;
	private String ra�a;
	private String nomePet;
	private float peso;
	private Date nascimento;
	private String dono;
	private String telefone;
	
	private SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

	public Pet(int id, String especie, String ra�a, String nomePet, float peso, String nascimento, String dono, String telefone) {
		this.id = id;
		this.especie = especie;
		this.ra�a = ra�a;
		this.nomePet = nomePet;
		this.peso = peso;
		this.dono = dono;
		this.telefone = telefone;
		
		try {
			this.nascimento = df.parse(nascimento);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	private int idade() {
		
		return new Date().getYear() - nascimento.getYear();
	}
	
	@Override
	public String toString() {
		return id + "\t" + especie + "\t" + ra�a + "\t" + nomePet +"\t" + String.format("%.2f", peso) + "\t"
				+ idade() + "\t" + dono + "\t" + telefone;
	}

}
