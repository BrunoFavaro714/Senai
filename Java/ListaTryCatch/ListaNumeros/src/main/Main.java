package main;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class Main {

	private static Arquivo arq = new Arquivo();
	private static Scanner input = new Scanner(System.in);
	private static Random rand = new Random();

	public static void main(String[] args) {
		int opcao = 0;
		while(opcao != 3) {
			System.out.println("1. Cadastrar\n2. Listar\n3. Sair");
			opcao = input.nextInt();
			input.nextLine();
			switch(opcao){
				case 1:
					int numb = rand.nextInt(100);
					
					arq.in(numb);
					break;
				case 2:
					ArrayList<Integer> output = arq.out();
					int[] lista = new int[output.size()];
					int q = 0;
					for (Integer linha : output) {
						lista[q] = linha;
						q++;
					}
					Arrays.sort(lista);
					for(int i = 0; i < lista.length; i++) {
						System.out.println(lista[i]);
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
