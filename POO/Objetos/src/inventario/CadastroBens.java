package inventario;

import java.util.Random;
import java.util.Scanner;

import inventario.CadastroBens.Bem;

public class CadastroBens {
	
	
	static Scanner input = new Scanner(System.in);
	static Random rand = new Random();
	static String[] descs = {"carro","casa","moto","ap.","relógio","empresa"};
	public static void main(String[] args) {
		System.out.println("Quantos bens deseja cadastrar?");
		int qtdBens = input.nextInt();
		Bem[] bens = new Bem[qtdBens];
		double acumulador = 0;
		for(int i = 0; i < qtdBens; i++) {
			bens[i] = new Bem(i+1, descs[rand.nextInt(descs.length)],rand.nextDouble()*100000);
			System.out.println(bens[i].bemTab());
			acumulador += bens[i].valor;
		}
		System.out.printf("total R$%.2f", acumulador);
	}
	public static class Bem {
		public int id;
		public String description;
		public double valor;
		
		Bem() {}
		Bem(int id, String description, double valor){
			this.id = id;
			this.description = description;
			this.valor = valor;
		}
		
		public String bemTab() {
			return String.format("%d\t%s\tR$%.2f", id, description,  valor);
		}
	}
}
