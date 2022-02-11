package modelo;

import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class RNG {

	public static Scanner input;
	public static void main(String[] args) throws IOException{
		input = new Scanner(System.in);
		
		int menu = 0;
		
		while(menu != 4) {
			System.out.print("1- Numeros Inteiros\n2- Numeros Reais\n3- Nomes\n4- Sair\n");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				GenInt();
				break;
			case 2:
				GenReal();
				break;
			case 3:
				GenName();
				break;
			case 4:
				System.out.println("Adeus!");
				break;
			default:
				System.out.println("Opção invalida.");
				break;
			}
		}
	}
	
	public static void GenInt() {
		input = new Scanner(System.in);
		Random rng = new Random();
		
		System.out.print("Digite quantos numeros deseja gerar: ");
		int qntd = input.nextInt();
		
		int[] numb = new int[qntd];
		
		for(int i = 0; i < qntd; i++) {
			numb[i] = rng.nextInt(100);
			System.out.println(numb[i]);
		}
	}
	
	public static void GenReal() {
		input = new Scanner(System.in);
		Random rng = new Random();
		
		System.out.print("Digite quantos numeros deseja gerar: ");
		int qntd = input.nextInt();
		
		double[] numb = new double[qntd];
		
		for(int i = 0; i < qntd; i++) {
			numb[i] = rng.nextDouble() * 100;
			System.out.printf("%.2f\n",numb[i]);
		}
	}
	
	public static void GenName() {
		input = new Scanner(System.in);
		Random rng = new Random();
		
		System.out.println("Digite quantos nomes você deseja gerar, até 8: ");
		int qntd = input.nextInt();
		
		String[] name = {"Bruno", "Victoria", "Luana", "Roberto", "Alison", "Elber", "Alice", "Claudinei"};
		
		for(int i = 0; i < qntd; i++) {
			int a = rng.nextInt(name.length);
			
			System.out.println(name[a]);
		}
	}
}
