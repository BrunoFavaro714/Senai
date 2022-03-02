package exercicios;

import java.time.Year;
import java.util.Scanner;

public class Idade2 {

	public static void main(String[] args) {
		
		Scanner leia = new Scanner(System.in);
		
		int year = Year.now().getValue();
		int nasc, idade;
		
		
		System.out.print("Digite seu ano de nascimento: ");
		nasc = leia.nextInt();
		
		idade = year - nasc;
		
		if (idade >= 18) {
			System.out.println("Você é maior de idade");
		} else {
			System.out.println("Você é menor de idade");
		}
	}
		
}
