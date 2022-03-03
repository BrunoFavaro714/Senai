package beginner;

import java.util.Scanner;

public class Level1035 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		double a,b,c,d;
		String val = input.nextLine();
		String[] varia = val.split(" ");
		a = Double.parseDouble(varia[0]);
		b = Double.parseDouble(varia[1]);
		c = Double.parseDouble(varia[2]);
		d = Double.parseDouble(varia[3]);
		
		if(b > c && d > a && (c+d) > (a+b) && c > 0 && d > 0 && (a/2) == Math.floor(a/2)) {
			System.out.println("Valores aceitos");
		}else {
			System.out.println("Valores nao aceitos");
		}
	}
}
