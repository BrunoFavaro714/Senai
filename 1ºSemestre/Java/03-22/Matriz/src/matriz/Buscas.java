package matriz;

import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class Buscas {

	static Scanner input = new Scanner(System.in);
	static Random r = new Random();
	public static void main(String[] args) throws IOException {
		System.out.print("Digite quantos numeros deseja: ");
		int z = input.nextInt();
		int data[] = numerosAleatorios(z);
		
		
		System.out.print("qual numero você deseja encontrar? ");
		int u = input.nextInt();
		buscaDados(data, u);
		
		
	}
	public static int[] numerosAleatorios(int z) {
		int x[] = new int[z];
		
		for(int i = 0; i < z; i++) {
			x[i] = r.nextInt(10);
		}
		return x;
	}
	public static void buscaDados(int[] data, int u) {
		boolean search = false;
		int y = 0;
		
		for(int i = 0; i < data.length; i++) {
			if(data[i]  == u) {
				System.out.println("o valor foi encontrado na posição " + i);
				y+=1;
				
				
			}
		}
		System.out.println("foi encontrado " + y + " vezes");
		
	}
}
