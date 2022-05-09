package beginner;

import java.util.Scanner;

public class Level1011 {
	
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		double r = input.nextFloat();
		
		double vol = (4.0/3) * 3.14159 * (Math.pow(r, 3));
		
		System.out.printf("VOLUME = %.3f", vol);
		System.out.println();
	}
}
