package exercicios;

import java.util.Scanner;

public class Lista2_2 {

	
	public static Scanner input;
	public static void main(String[] args) {
		input = new Scanner(System.in);
		int[] ages =leVetor();
		mostra(ages);
		int output = maiorIdade(ages);
		System.out.println("A maior idade é: " + output);
	}
	
	public static int[] leVetor() {
		int[] vetor = new int[5];
		
		for(int i = 0; i < vetor.length; i++) {
			System.out.print("Insira a idade: ");
			vetor[i] = input.nextInt();
		}
		
		return vetor;
	}
	
	public static void mostra(int[] output) {
		
		
		for(int i = 0; i < output.length; i++) {
			System.out.println(i + "\t" + output[i]);
		}
		
	}
	
	public static int maiorIdade(int[] output) {
		int maiorIdade = 0;
		for(int i = 0; i < output.length; i++) {
			if(output[i] > maiorIdade) {
				maiorIdade = output[i];
			}
		}
		
		return maiorIdade;
	}
}