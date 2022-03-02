package aula5;

import java.util.Scanner;

public class Lista3 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int opcao = 0, valor;
		
		while (opcao != 11) {
			
			System.out.println("1-Programa1\t5-Programa5\t9-Programa9");
			System.out.println("2-Programa2\t6-Programa6\t10-Programa9");
			System.out.println("3-Programa3\t7-Programa7\t11-Sair");
			System.out.println("4-Programa4\t8-Programa8");
			System.out.print("Digite uma opção: ");
			opcao = input.nextInt();
			
			switch (opcao) {
			case 1:
				for (int i = 10; i <= 200; i++) {
					System.out.println(i);
				}
				break;
			case 2:
				for (int i = 200; i > 0; i--) {
					System.out.println(i);
				}
				break;
			case 3:
				System.out.print("Digite um valor inteiro: ");
				valor = input.nextInt();
				for (int i = 0; i < valor; i++) {
					System.out.println(i);
				}
				break;
			case 4:
				System.out.print("Digite um valor inteiro: ");
				for (int i = input.nextInt(); i > 0; i--) {
					System.out.println(i);
				}
				break;
			case 5:
				System.out.print("Digite um valor negativo: ");
				for (int i = input.nextInt(); i > -100; i--) {
					System.out.println(i);
				}
				break;
			case 6:
				System.out.print("Digite um valor inteiro: ");
				for (int i = -input.nextInt(); i > -100; i-=5) {
					System.out.println(i);
				}
				break;
			case 7:
				System.out.print("Digite um valor inteiro: ");
				for (int i = -input.nextInt(); i <= 100; i+=5) {
					System.out.println(i);
				}
				break;
			case 8:
				System.out.print("Digite um valor inteiro: ");
				valor = input.nextInt();
				for (int i = 0; i < (valor*10); i+=valor) {
					System.out.println(i);
				}
				break;
			case 9:
				System.out.print("Digite um valor inteiro: ");
				valor = input.nextInt();
				for (int i = 0; i > -valor; i-=(valor/5)) {
					System.out.println(i);
				}
				break;
			case 10:
				System.out.print("Digite um valor inteiro: ");
				valor = input.nextInt();
				for (int i = 0; i < valor; i+=(valor/5)) {
					System.out.println(i);
				}
				break;
			case 11:
				System.out.println("Até logo.");
				break;
			default:
				System.out.println("Opção Inválida.");
				break;
			}
		}
	}
}
