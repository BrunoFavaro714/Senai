package modelo;

public class Venda {

	private int codCliente;
	private int codFuncionario;
	private double valor;
	
	public Venda() {
		super();
	}
	
	
	public int getCodCliente() {
		return codCliente;
	}
	public void setCodCliente(int codCliente) {
		this.codCliente = codCliente;
	}
	
	
	public int getCodFuncionario() {
		return codFuncionario;
	}
	public void setCodFuncionario(int codFuncionario) {
		this.codFuncionario = codFuncionario;
	}
	
	
	public double getValor() {
		return valor;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}


	@Override
	public String toString() {
		return "ID do Cliente: " + codCliente + "\n ID do Funcionario: " + codFuncionario + "\n Valor da Compra: " + String.format("R$%.2f",valor);
	}
	
	
}
