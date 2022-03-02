package lacoRepet;

import java.util.Scanner;

public class Periodos {

	public static void main(String[] args) {
		Scanner input =  new Scanner(System.in);
		int menu = 0;
		
		while(menu != 4) {
			System.out.print("1.Manhã\n2.Tarde\n3.Noite\n4.Sair\nEscolha: ");
			menu = input.nextInt();
			System.out.println();
			switch(menu) {
			case 1:
				System.out.println("Bom Dia!");
				System.out.println();
				break;
			case 2:
				System.out.println("Boa Tarde!");
				System.out.println();
				break;
			case 3:
				System.out.println("Boa Noite!");
				System.out.println();
				break;
			case 4:
				System.out.println("Tenha um Bom Dia!");
				System.out.println();
				break;
			default:
				System.out.println();
				break;
			}
		}
	}
}
