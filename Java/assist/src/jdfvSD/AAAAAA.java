package jdfvSD;

import java.util.Random;

public class AAAAAA {
	public static void main(String[] args) {
		// 6 Faça um programa para gerar automaticamente numeros entre 0 e 99 de uma
		// cartela de bingo.
		// Sabendo que cada cartela devera conter 5 linhas de 5 números, gere estes
		// dados de modo a
		// nao ter números repetidos dentro das cartelas. O programa deve exibir na tela
		// a cartela gerada.

		int[][] matriz = new int[5][5];
		int[] vetor_numeros = new int[25];
		System.out.println("Bingo 5x5");
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				matriz[i][j] = new Random().nextInt(100);
			}
		}

		for (int i = 0; i < vetor_numeros.length; i++) {
			vetor_numeros[i] = matriz[i / 5][i % 5];
		}

		boolean repetido = false;

		for (int i = 0; i < vetor_numeros.length; i++) {		
			do {
				vetor_numeros[i] = new Random().nextInt(100);
				repetido = false;
				for (int j = 0; j < vetor_numeros.length; j++) {
					if (vetor_numeros[i] == vetor_numeros[j] && i != j) {
						repetido = true;
					}
				}
			} while (repetido);
		}
		int k = 0;
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				matriz[i][j] = vetor_numeros[k];
				k++;
			}
		}

		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				
				System.out.print(matriz[i][j] + "\t");
			}
			System.out.println();
		}
	}
}