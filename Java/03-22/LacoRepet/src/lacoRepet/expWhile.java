package lacoRepet;

import java.util.Scanner;

public class expWhile {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int i = input.nextInt();
		
		while(i < 10) {
			i++;
			System.out.println(i);
		}
		
	}
}
