package modelo;

import java.util.Scanner;

public class Menu {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int menu;
		
		
		System.out.println("1. Engatinhar");
		System.out.println("2. Andar");
		System.out.println("3. Correr");
		System.out.println("4. Pedalar");
		System.out.println("5. Dirigir");
		System.out.println("6. Pilotar");
		
		System.out.print("Digite uma opção: ");
		
		
		menu = entrada.nextInt();
		
		switch(menu) {
		case 1: 
			System.out.println("engatinhando...");
			break;
		case 2:
			System.out.println("andando...");
			break;
		case 3:
			System.out.println("correndo...");
			break;
		case 4:
			System.out.println("pedalando");
			break;
		case 5:
			System.out.println("dirigindo...");
			break;
		case 6:
			System.out.println("pilotando...");
			break;
		default:
			System.out.println("fazendo nada...");
			break;
		}
		
		
	}
}
