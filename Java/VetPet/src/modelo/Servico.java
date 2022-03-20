package modelo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Servico {

	public Pet pet;
	public String nomeFuncionario;
	public String descricao;
	public Date data;
	public Date hora;

	private SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	private SimpleDateFormat hf = new SimpleDateFormat("HH:mm");

	public Servico() {
	}
	public Servico(Pet pet, String nomeFuncionario, String descricao, String data, String hora) throws ParseException {
		this.pet = pet;
		this.nomeFuncionario = nomeFuncionario;
		this.descricao = descricao;
		this.data = df.parse(data);
		this.hora = hf.parse(hora);
	}
	public String tabularString() {
		return pet.paraString() + "\t" + nomeFuncionario + "\t" + descricao + " " + df.format(data)
				+ "\t" + hf.format(hora);
	}
}