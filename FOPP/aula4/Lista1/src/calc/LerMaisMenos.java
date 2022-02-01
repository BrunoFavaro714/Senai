package calc;

import java.util.Scanner;

public class LerMaisMenos {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int n;
	
		System.out.print("Insira um valor inteiro, positivo e diferente de zero para N: ");
		n = entrada.nextInt();
		
		if (n > 0) {
			System.out.println("N-1 = " + (n-1) + " e N+1 = " + (n+1));
		} else {
			System.out.println("N não é inteiro, positivo e diferente de zero");
		}
	}
}
