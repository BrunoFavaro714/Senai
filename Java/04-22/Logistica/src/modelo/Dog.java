package modelo;

public class Dog extends Animal {

	private int qtdMotoqueirosAtacados;

	public Dog(String especie, String nome, float peso, String raca, int qtdMotoqueirosAtacados) {
		super(especie, nome, peso, raca);
		this.qtdMotoqueirosAtacados = qtdMotoqueirosAtacados;
		
	}

	@Override
	public String toString() {
		return super.toString() + "Motoqueiros Atacados = " + qtdMotoqueirosAtacados + " "  ;
	}
	
}
