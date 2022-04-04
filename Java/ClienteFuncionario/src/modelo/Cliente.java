package modelo;

import java.util.Date;

public class Cliente extends Pessoa {

	private int id;
	private double creditoLimite;
	
	

	public Cliente(String nome, String telefone, Date nascimento) {
		super(nome, telefone, nascimento);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getCreditoLimite() {
		return creditoLimite;
	}

	public void setCreditoLimite(double creditoLimite) {
		this.creditoLimite = creditoLimite;
	}
	
	@Override
	public String toString() {
		return id + " " + super.toString() + " " + String.format("R$%.2f",creditoLimite);
	}
	
	
}
