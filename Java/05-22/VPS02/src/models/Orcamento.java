package models;

public class Orcamento {

	private int id;
	private String fornecedor;
	private String produto;
	private String descricao;
	private double preco;
	private boolean maisBarato;
	
	
	public Orcamento(int id, String fornecedor, String produto, String descrição, double preco, boolean maisBarato) {
		this.id = id;
		this.fornecedor = fornecedor;
		this.produto = produto;
		this.descricao = descrição;
		this.preco = preco;
		this.maisBarato = maisBarato;
	}
	
	public Orcamento(String linha) {
		this.id = Integer.parseInt(linha.split(";")[0]);
		this.fornecedor = linha.split(";")[1];
		this.produto = linha.split(";")[2];
		this.descricao = linha.split(";")[3];
		this.preco = Double.parseDouble(linha.split(";")[4]);
		this.maisBarato = Boolean.parseBoolean(linha.split(";")[5]);
	}
	

	public String getId(String s) {
		return String.valueOf(id);
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(String fornecedor) {
		this.fornecedor = fornecedor;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescrição(String descrição) {
		this.descricao = descrição;
	}

	public double getPreco() {
		return preco;
	}
	
	public String getPreco(String s) {
		return String.format("%.2f", preco);
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public boolean isMaisBarato() {
		return maisBarato;
	}

	public void setMaisBarato(boolean maisBarato) {
		this.maisBarato = maisBarato;
	}

	
	public String comprar() {
		if(maisBarato) {
			return "Comprar";
		}
		return null;
	}
	
	@Override
	public String toString() {
		return id + ";" + fornecedor + ";" + produto + ";"
				+ descricao + ";" + preco + ";" + maisBarato;
	}
	
	public String toCSV() {
		return id + ";" + fornecedor + ";" + produto + ";"
				+ descricao + ";" + preco + ";" + comprar();
	}
	
}
