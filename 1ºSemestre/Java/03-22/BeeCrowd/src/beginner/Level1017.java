package beginner;

import java.util.Scanner;

public class Level1017 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		double time = input.nextInt();
		double speed = input.nextInt();
		
		double gasto = (time*speed)/12;
		System.out.printf("%.3f", gasto);
	}
}
