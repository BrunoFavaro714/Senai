package modelo;

public class Cat extends Animal {
	
	private int qtdVidas = 7;

	public Cat(String especie, String nome, float peso, String raca, int qtdVidas) {
		super(especie, nome, peso, raca);
		this.qtdVidas = qtdVidas;
	}

	@Override
	public String toString() {
		return super.toString() + "Vidas = " + qtdVidas + "";
	}
	
}
