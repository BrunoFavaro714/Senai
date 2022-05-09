package calc;

import java.util.Scanner;

public class Calcular {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		float a, b, c, resultado;
		
		System.out.print("Insira a variavel A: ");
		a = entrada.nextFloat();
		System.out.print("Insira a variavel B: ");
		b = entrada.nextFloat();
		System.out.print("Insira a variavel C: ");
		c = entrada.nextFloat();
		
		resultado = (a + b) / c;
		
		System.out.printf("O resultado é %.2f", resultado);
	}
}
