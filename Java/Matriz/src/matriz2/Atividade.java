package matriz2;

import java.util.Random;
import java.util.Scanner;

public class Atividade {

	static Scanner input = new Scanner(System.in);
	static Random rand = new Random();
	public static void main(String[] args) {
		
		int[][] valor = new int[5][5];
		
		for(int i = 0; i < valor.length; i++) {
			for(int j = 0; j < valor.length; j++) {
				valor[i][j] = rand.nextInt(100);
			}
		}
		
		int menu = 0;
		
		while(menu != 3) {
			System.out.println("1.Ímpares\t2.Pares\n3.Sair");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				impares(valor);
				break;
			case 2:
				pares(valor);
				break;
			case 3:
				break;
			default:
				break;
			}
		}
		
		
		
	}
	public static void impares(int[][] valor) {
		System.out.println("São Ímpares:");
		
		int x = 0;
		double z = 0;
		int k = 0;
		for(int i = 0; i < valor.length; i++) {
			for(int j = 0; j < valor.length; j++) {
				int se = (valor[i][j] % 2);
				if(se != 0) {
					k+=1;
					System.out.print(valor[i][j]+"\t");
					z+=valor[i][j];
				}
			}
		}
		System.out.println("\ntotalizando = " + k);
		System.out.printf("Media é de = %.2f\n\n",(z/k));
	}
	
	
	
	
	
	public static void pares(int[][] valor) {
		System.out.println("São Pares:");
		
		int k = 0;
		for(int i = 0; i < valor.length; i++) {
			for(int j = 0; j < valor.length; j++) {
				int se = (valor[i][j] % 2);
				if(se == 0) {
					k+=1;
					System.out.print(valor[i][j]+"\t");
				}
			
			}
		}
		System.out.println("\ntotalizando = " + k);
	}
}
