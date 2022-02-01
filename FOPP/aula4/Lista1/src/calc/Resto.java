package calc;

import java.util.Scanner;

public class Resto {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int resto, A, B;
		
		System.out.print("Insira insira um primeiro valor: ");
		A = entrada.nextInt();
		System.out.print("Insira um segundo valor, diferente de 0: ");
		B = entrada.nextInt();
		
		resto = A % B;
		
		System.out.println("O resto da divisão é de " + resto);
	}
}
