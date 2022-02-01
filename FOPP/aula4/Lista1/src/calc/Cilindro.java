package calc;

import java.util.Scanner;

public class Cilindro {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		double dim, r, h, area, base, volume;
		
		System.out.print("Insira o diametro do cilindro: ");
		dim = entrada.nextDouble();
		System.out.print("Insira a altura do cilindro: ");
		h = entrada.nextDouble();
		
		r = dim / 2;
		base = 3.14 * (r * r);
		volume = base * h;
		area = 2 * 3.14 * r * (r + h);
		
		System.out.printf("a area é de %.2fcm² e o volume é de %.2fcm³", area, volume);
				
	}
}
