package cartão;

import java.util.Random;
import java.util.Scanner;

public class Acumula {
	
	public static Scanner input;
	public static Random rng;
	public static void main(String[] args) {
		input = new Scanner(System.in);
		rng = new Random();
		System.out.println("algoritimo de acumulação");
		System.out.println("simples, retorno = " + simples(345));
		System.out.println("Acumulado total = " + random(2));
		System.out.println(fat(7));
		System.out.printf("%.2f",emprestimo());
	}
	public static int simples(int iteracoes){
		int x = 0;
		for(int i = 0; i < iteracoes; i++)
			x+=i;
		return x;
	}
	public static int random(int iteracoes){
		int x = 0;
		int r = 0;
		for(int i = 0; i < iteracoes; i++) {
			r = rng.nextInt(100);
			System.out.print("RNG = " + r);
			x+=r;
			System.out.println("\tAcumulado = " + x);
		}
		return x;
	}
	public static int fat(int input) {
		int x = 1;
		for(int i = input; i > 0; i--) {
			x*=i;
		}
		return x;
	}
	public static double emprestimo() {
		double montante, juros, valor, tempo, taxa, renda;
		
		System.out.println("Insira sua Renda: ");
		renda = input.nextDouble();
		System.out.println("Insira o valor do emprestimo:");
		valor = input.nextDouble();
		
		tempo = valor / (renda*0.3);
		taxa = 1 + (0.85/100);
		montante = valor * Math.pow(taxa, tempo);
		
		for(int i = 0; i < tempo; i++) {
			juros = montante - valor;
			montante+=juros;
		}
		System.out.println(tempo);
		return montante;
	}

}
