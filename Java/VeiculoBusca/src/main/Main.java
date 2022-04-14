package main;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	
	private static Arquivo arq = new Arquivo();
	private static Scanner input = new Scanner(System.in);
	private static String[] carros = {"Modelo", "Marca", "Placa", "cor"};
	
	public static void main(String[] args) {
		int opcao = 0;
		
		while(opcao != 4) {
			System.out.println("1. Cadastrar\n2. Listar\n3. Buscar\n4. Sair");
			opcao = input.nextInt();
			input.nextLine();
			switch(opcao) {
				case 1:
					cadastro();
					break;
				case 2:
					listar();
					break;
				case 3:
					buscar();
					break;
				case 4:
					System.out.println("Adios");
					break;
				default:
					System.out.println("...");
					break;
			}
		}
	}
	private static void cadastro() {
		String[] carro = new String[4];
		for(int i = 0; i < carros.length; i++) {
			System.out.println("Informe " + carros[i]);
			carro[i] = input.next();
			if(i == 3) {
				for (int j = 0; j < 7; j++) {
					char index = carro.charAt(j);
					if(j < 3) {
						
						
					}
					
				}
			}
		}
		String data = carro[0] + ";" + carro[1] + ";" + carro[2] + ";" + carro[3];
		
		arq.escrever(data, "carros", true);
	}
	private static void listar() {
		ArrayList<String> output = arq.ler("carros"); 
		
		for (String linha : output) {
			String[] temp = linha.split(";");
			System.out.println("-------------------\nNome: " + temp[0] + "\nIdade: " + temp[1] + "\nCidade: " + temp[2]+"\n");
		}
	}
	private static void buscar() {
		ArrayList<String> output = arq.ler("carros"); 
		System.out.println("Digite a Placa ou modelo");
		String busca = input.nextLine();
		
		for (String linha : output) {
			String[] temp = linha.split(";");
			if(temp[2].toLowerCase().contains(busca.toLowerCase()) || temp[0].toLowerCase().contains(busca.toLowerCase())) {
				System.out.println("-------------------\nNome: " + temp[0] + "\nIdade: " + temp[1] + "\nCidade: " + temp[2]);
			}
		}
	}
}
