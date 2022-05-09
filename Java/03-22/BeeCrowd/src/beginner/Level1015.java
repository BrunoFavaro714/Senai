package beginner;

import java.util.Scanner;

public class Level1015 {
	
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		double a,b,c,d;
		String val1 = input.nextLine();
		String[] varia1 = val1.split(" ");
		a = Double.parseDouble(varia1[0]);
		b = Double.parseDouble(varia1[1]);
		
		String val2 = input.nextLine();
		String[] varia2 = val2.split(" ");
		c = Double.parseDouble(varia2[0]);
		d = Double.parseDouble(varia2[1]);
		
		double dist = Math.sqrt(Math.pow((a - c), 2)+Math.pow((b - d), 2));
		System.out.printf("%.4f", dist);
		System.out.println();
	}
}
