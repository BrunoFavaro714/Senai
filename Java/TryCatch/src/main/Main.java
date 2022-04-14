package main;


import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	private static Arquivo arq = new Arquivo();
	private static Scanner input = new Scanner(System.in);

	public static void main(String[] args) {
		int opcao = 0;
		while(opcao != 3) {
			System.out.println("1. Cadastrar\n2. Listar\n3. Sair");
			opcao = input.nextInt();
			input.nextLine();
			switch(opcao){
				case 1:
					System.out.println("Informe o seu nome: ");
					String nome = input.next();
					System.out.println("Informe sua Idade: ");
					String idade = input.next();
					System.out.println("Informe sua cidade");
					String cidade = input.next();
					
					String data = nome + ";" + idade + ";" + cidade;
					
					arq.escrever(data, "pessoas", true);
					break;
				case 2:
					ArrayList<String> output = arq.ler("Pessoas"); 
					
					for (String linha : output) {
						String[] temp = linha.split(";");
						System.out.println("-------------------\nNome: " + temp[0] + "\nIdade: " + temp[1] + "\nCidade: " + temp[2]);
					}
					break;
				case 3:
					System.out.println("Flw!");
					break;
				default:
					System.out.println("erro, opção invalida");
					break;
			}
		}
		
	}
}
