package exercicios;

import java.util.Scanner;

public class Triangulo {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int A, B, C, D;
		
		System.out.print("Insira o valor do 1� lado: ");
		A = entrada.nextInt();
		System.out.print("Insira o valor do 2� lado: ");
		B = entrada.nextInt();
		System.out.print("Insira o valor do 3� lado: ");
		C = entrada.nextInt();
		
		if (A == B && B == C) {
			System.out.println("O triangulo � Equil�tero.");
		} else if (A != B && B != C) {
			System.out.println("O triangulo � Escaleno");
		} else {
			System.out.println("O triangulo � Is�sceles.");
		}
	}
}
