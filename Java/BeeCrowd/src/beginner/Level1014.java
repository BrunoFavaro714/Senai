package beginner;

import java.util.Scanner;

public class Level1014 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		double km = input.nextDouble();
		double l = input.nextDouble();
		double consumo = km/l;
		
		System.out.printf("%.3f km/l", consumo);
		System.out.println();
	}
}
