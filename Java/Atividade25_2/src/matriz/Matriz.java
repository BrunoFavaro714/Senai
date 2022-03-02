package matriz;

import java.util.Random;
import java.util.Scanner;

public class Matriz {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in); 
		
		int menu = 0;
		
		while(menu != 4) {
			System.out.print("1.\n2.\n3.\n4.\n");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				vetor();
				break;
			case 2:
				matriz();
				break;
			case 3:
				matriz3d();
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
	public static void vetor() {
		Random rng = new Random();
		int[] x = new int[27];
		
		
		for(int i = 0; i < 27; i++) {
			x[i] = rng.nextInt(100);
			System.out.println(x[i]);
		}
		
		
	}
	public static void matriz() {
		Random rng = new Random();
		int[][] x = new int[3][9];
		
		for(int i = 0; i < 3; i++) {
			for(int j = 0; j < 9; j++) {
				x[i][j] = rng.nextInt(100);
				System.out.print(x[i][j]);
			}
		}
		
		
	}
	public static void matriz3d() {
		Random rng = new Random();
		int[][][] x = new int[3][3][3];
		
		for(int i = 0; i < 3; i++) {
			for(int j = 0; j < 3; j++) {
				for(int k = 0; k < 3; k++) {
					x[i][j][k] = rng.nextInt(100);
					System.out.print(x[i][j][k]);
				}
			}
		}
		
		
	}
}
