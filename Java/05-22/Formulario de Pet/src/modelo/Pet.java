package modelo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

public class Pet {

	private int id;    
	private String especie;
	private String nomePet;
	private String raca;
	private float peso;
	private Date nascimento;
	private String dono;
	private String telefone;
	
	private SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

	public Pet(int id, String especie, String nomePet, String raca, float peso, String nascimento, String dono, String telefone) {
		this.id = id;
		this.especie = especie;
		this.nomePet = nomePet;
		this.raca = raca;
		this.peso = peso;
		this.dono = dono;
		this.telefone = telefone;
		
		try {
			this.nascimento = df.parse(nascimento);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	public Pet(String linha) {
		this.id = Integer.parseInt(linha.split(";")[0]);
		this.especie = linha.split(";")[1];
		this.nomePet = linha.split(";")[2];
		this.raca = linha.split(";")[3];
		this.peso = Float.parseFloat(linha.split(";")[4]);
		this.dono = linha.split(";")[6];
		this.telefone = linha.split(";")[7];
		
		try {
			this.nascimento = df.parse(linha.split(";")[5]);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}
	
	public Pet(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public String getId(String s) {
		return String.valueOf(id);
	}
	
	public void setId(int id) {
		this.id = id;
	}

	public String getEspecie() {
		return especie;
	}

	public void setEspecie(String especie) {
		this.especie = especie;
	}
	
	public String getNomePet() {
		return nomePet;
	}

	public void setNomePet(String nomePet) {
		this.nomePet = nomePet;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}


	public float getPeso() {
		return peso;
	}

	public String getPeso(String s) {
		return String.format("%.2f", peso);
	}
	public void setPeso(float peso) {
		this.peso = peso;
	}

	public Date getNascimento() {
		return nascimento;
	}
	public String getNascimento(String s) {
		return df.format(nascimento);
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public String getDono() {
		return dono;
	}

	public void setDono(String dono) {
		this.dono = dono;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	@SuppressWarnings("deprecation")
	private int idade() {
		
		return new Date().getYear() - nascimento.getYear();
	}
	
	@Override
	public String toString() {
		return id + "\t" + especie + "\t" + nomePet + "\t" + raca +"\t" + String.format("%.2f", peso) + "\t"
				+ idade() + "\t" + dono + "\t" + telefone + "\n";
	}
	
	public String toCSV() {
		return id + ";" + especie + ";" + nomePet + ";" + raca +";" + String.format("%.2f", peso) + ";"
				+ df.format(nascimento) + ";" + dono + ";" + telefone + "\r\n";
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pet other = (Pet) obj;
		return id == other.id;
	}

}
