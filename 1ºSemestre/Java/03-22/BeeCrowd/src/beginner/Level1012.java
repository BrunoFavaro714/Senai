package beginner;

import java.util.Scanner;

public class Level1012 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		double a,b,c,tri,cir,tra,qua,ret;
		String val = input.nextLine();
		String[] varia = val.split(" ");
		a = Double.parseDouble(varia[0]);
		b = Double.parseDouble(varia[1]);
		c = Double.parseDouble(varia[2]);
		tri = a*c/2;
		cir = 3.14159*Math.pow(c, 2);
		tra = (a+b)*c/2;
		qua = b*b;
		ret = a*b;
		System.out.printf("TRIANGULO: %.3f\nCIRCULO: %.3f\nTRAPEZIO: %.3f\nQUADRADO: %.3f\nRETANGULO: %.3f", tri, cir, tra, qua, ret);
		System.out.println();
	}
}
