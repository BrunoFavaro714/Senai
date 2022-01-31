package exercicios;

import java.util.Scanner;

public class Idade {

	public static void main(String[] args) {
		
		Scanner leia = new Scanner(System.in);
		int idade;
		
		System.out.print("Digite sua idade: ");
		idade = leia.nextInt();
		
		if (idade >= 18) {
			System.out.println("Você é maior de idade");
		} else {
			System.out.println("Você é menor de idade");
		}
		
	}
	
}
