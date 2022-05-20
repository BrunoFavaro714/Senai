package modelo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

public class Manutencao {

	private int id;
	private Date data;
	private String equipamento;
	private double custoHora;
	private double tempoGasto;
	
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	public Manutencao(int id, String data, String equipamento, double custoHora, double tempoGasto) {
		super();
		this.id = id;
		try {
			this.data = sdf.parse(data);
		}catch(ParseException e) {
			System.out.println(e);
		}
		this.equipamento = equipamento;
		this.custoHora = custoHora;
		this.tempoGasto = tempoGasto;
	}
	
	public Manutencao(String linha) {
	}

	public double getTotal() {
		return custoHora * tempoGasto;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getEquipamento() {
		return equipamento;
	}

	public void setEquipamento(String equipamento) {
		this.equipamento = equipamento;
	}

	public double getCustoHora() {
		return custoHora;
	}

	public void setCustoHora(double custoHora) {
		this.custoHora = custoHora;
	}

	public double getTempoGasto() {
		return tempoGasto;
	}

	public void setTempoGasto(double tempoGasto) {
		this.tempoGasto = tempoGasto;
	}

	@Override
	public int hashCode() {
		return Objects.hash(custoHora, data, equipamento, id, tempoGasto);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Manutencao other = (Manutencao) obj;
		return Double.doubleToLongBits(custoHora) == Double.doubleToLongBits(other.custoHora)
				&& Objects.equals(data, other.data) && Objects.equals(equipamento, other.equipamento) && id == other.id
				&& Double.doubleToLongBits(tempoGasto) == Double.doubleToLongBits(other.tempoGasto);
	}

	@Override
	public String toString() {
		return id + "\t" + data + "\t" + equipamento + "\t" + custoHora
				+ "\t" + tempoGasto + "\t" + getTotal();
	}
	
	public String toCSV() {
		return id + ";" + data + ";" + equipamento + ";" + custoHora
				+ ";" + tempoGasto;
	}
	
}
