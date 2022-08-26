package matriz;

import java.util.Random;
import java.util.Scanner;

public class teste {

	static Scanner input = new Scanner(System.in);
	static Random rand = new Random();
	public static void main(String[] args) {
		
		int[][] x = new int[5][5];
		
		for(int i = 0; i < 5; i++) {
			for(int j = 0; j < 5; j++) {
				x[i][j] = rand.nextInt(100);
				System.out.print(x[i][j]+"\t");
			}
			System.out.println("\n");
		}
		System.out.println();
		for(int i = 0; i < 5; i++) {
			System.out.print(x[i][i]+"\t");
			System.out.print(x[i][4-i]+"\n");
		}
	}
}
