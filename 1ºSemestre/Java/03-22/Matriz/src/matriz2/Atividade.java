package matriz2;

import java.util.Random;
import java.util.Scanner;

public class Atividade {

	static Scanner input = new Scanner(System.in);
	static Random rand = new Random();
	public static void main(String[] args) {
		
		int aux = 0;
		int[][] valor = new int[5][5];
		int[] vt = new int[25];
		
		for(int i = 0; i < valor.length; i++) {
			for(int j = 0; j < valor.length; j++) {
				valor[i][j] = rand.nextInt(100);
				vt[aux] = valor[i][j];
				aux++;
			}
		}
		
		for(int i = 0; i < vt.length; i++) {
			for(int j = 0; j < vt.length; j++) {
				if(vt[i] < vt[j]) {
					aux = vt[i];
				    vt[i] = vt[j];
				    vt[j] = aux;
				}
			}
		}
		
		int menu = 0;
		
		while(menu != 3) {
			System.out.println("1.Ímpares\t2.Pares\n3.Sair");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				impares(valor, vt);
				break;
			case 2:
				pares(valor, vt);
				break;
			case 3:
				break;
			default:
				break;
			}
		}
		
		
		
	}
	public static void impares(int[][] valor, int[] vt) {
		System.out.println("São Ímpares:");
		
		int p = 0;
		int q = 0;
		double z = 0;
		int k = 0;
		int u = 0;
		int mediana = 0;
		for(int i = 0; i < valor.length; i++) {
			for(int j = 0; j < valor.length; j++) {
				int se = (valor[i][j] % 2);
				if(se != 0) {
					k+=1;
					System.out.print(valor[i][j]+"\t");
					z+=valor[i][j];
				}
				if(valor[i][j] > p && se != 0) {
					p = valor[i][j];
				}
				if(valor[i][j] < q && se != 0) {
					q = valor[i][j];
				}
			}
		}
		int y = 0;
		int[] vti = new int[k];
		int g = (int) Math.floor(k/2);
		System.out.println();
		for(int i = 0; i < vt.length; i++) {
				if(vt[i]%2 != 0) {
					System.out.print(vt[i]+"\t");
					vti[y] = vt[i];
					y++;
				}
		}
		for(int i = 0; i < vti.length; i++) {
			if(k%2 == 0) {
				mediana = (vti[g]+vti[(g-1)])/2;
			}else if( k%2 != 0){
				mediana = vti[(g)];
			}
		}
		System.out.println("\ntotalizando = " + k);
		System.out.printf("Media é de = %.2f\n",(z/k));
		System.out.println("A mediana é = " + mediana);
		System.out.println("O maior numero Ímpar é = " + p +"\n");
	}
	
	
	
	
	
	public static void pares(int[][] valor, int[] vt) {
		System.out.println("São Pares:");

		int p = 0;
		int q = 0;
		double z = 0;
		int k = 0;
		int u = 0;
		int mediana = 0;
		for(int i = 0; i < valor.length; i++) {
			for(int j = 0; j < valor.length; j++) {
				int se = (valor[i][j] % 2);
				if(se == 0) {
					k+=1;
					z+=valor[i][j];
				}
				if(valor[i][j] > p && se == 0) {
					p = valor[i][j];
				}
				if(valor[i][j] < q && se == 0) {
					q = valor[i][j];
				}
			}
		}
		int y = 0;
		int[] vti = new int[k];
		int g = (int) Math.floor(k/2);
		System.out.println();
		for(int i = 0; i < vt.length; i++) {
				if(vt[i]%2 == 0) {
					System.out.print(vt[i]+"\t");
					vti[y] = vt[i];
					y++;
				}
		}
		for(int i = 0; i < vti.length; i++) {
			if(k%2 == 0) {
				mediana = (vti[g]+vti[(g-1)])/2;
			}else if( k%2 != 0){
				mediana = vti[(g)];
			}
		}
		System.out.println("\ntotalizando = " + k);
		System.out.printf("Media é de = %.2f\n",(z/k));
		System.out.println("A mediana é = " + mediana);
		System.out.println("O maior numero Par é = " + p +"\n");
	}
}
