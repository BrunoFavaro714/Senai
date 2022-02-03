package split;

import java.util.Scanner;

public class split {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		double total,in1, in2, in4, in5, in3, in6;
		
		String string1 = input.nextLine();
		String[] parts = string1.split(" ");
		in1 = Double.parseDouble(parts[0]);
		in2 = Double.parseDouble(parts[1]);
		in3 = Double.parseDouble(parts[2]);
		
		String string2 = input.nextLine();
		String[] parts2 = string2.split(" ");
		in4 = Double.parseDouble(parts2[0]);
		in5 = Double.parseDouble(parts2[1]);
		in6 = Double.parseDouble(parts2[2]);	
		
		total = (in2 * in3) + (in5 * in6);
		
		System.out.printf("Valor total = R$%.2f", total);
	}
}