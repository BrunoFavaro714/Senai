package beginner;

import java.util.Scanner;
import static java.lang.Math.abs;

public class Level1013 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		double a,b,c,AB, ABC;
		String val = input.nextLine();
		String[] varia = val.split(" ");
		a = Double.parseDouble(varia[0]);
		b = Double.parseDouble(varia[1]);
		c = Double.parseDouble(varia[2]);
		AB = (a + b + abs(a - b)) / 2;
		ABC = (AB + c + abs(AB - c)) / 2;
		System.out.printf("%.0f eh o maior", ABC);
		System.out.println();
	}
}
