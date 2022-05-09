package modelo;

import java.util.Scanner;

public class Vetor {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int comprimento = 3;
		
		String[] name = new String[comprimento];
		int[] age = new int[comprimento ];

		
		for (int i = 0; i < comprimento; i++) {
			System.out.print("Nome[" + i + "]: ");
			name[i] = input.next();
			System.out.print("Idade[" + i + "]: ");
			age[i] = input.nextInt();
		}
		
		for (int i = 0; i < comprimento; i++) {
			if(age[i] < 10) {
				System.out.println(name[i] + ", você é uma criança.");
			}else if(age[i] < 20) {
				System.out.println(name[i] + ", você é jovem.");
			}else {
				System.out.println(name[i] + ", você é velho.");
			}
		}
	}
}
