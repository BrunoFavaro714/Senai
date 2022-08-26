package exercicios;

public class Lista2_1 {

	public static void main(String[] args) {
		mostrar();
	}
	public static void mostrar() {
		
		int vetor[] = {2, 4, 5, 6, 8};
		
		System.out.println("Indice:\t\tValor:");
		for(int i = 0; i < vetor.length; i++) {
		System.out.println(i+"\t\t"+vetor[i]);
		}
	}
}