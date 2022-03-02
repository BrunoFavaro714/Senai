package lacoRepet;

import java.util.Scanner;

public class doWhile {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int opcao;
		
		do {
			System.out.print("Digite 1: ");
			opcao = scan.nextInt();
		} while (opcao != 1);
		
		System.out.println("Adeus.");
	}
}
