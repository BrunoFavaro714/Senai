package calc;

import java.util.Scanner;

public class Soma {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int A, B, Result;
		
		System.out.print("Insira um valor inteiro: ");
		A = entrada.nextInt();
		System.out.print("Insira outro valor inteiro: ");
		B = entrada.nextInt();
		
		Result = A + B;
		
		System.out.println("O resultado da soma é " + Result);
	}
}
