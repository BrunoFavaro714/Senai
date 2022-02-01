package calc;

import java.util.Scanner;

public class Pisos {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		double area, custo, quilos, peso, preço;
		
		System.out.print("Insira a area, em m², a ser revestida: ");
		area = entrada.nextDouble();
		
		peso = 2.702;
		preço = 35.135;
		quilos = area * peso;
		custo = area * preço;
		
		
		System.out.printf("Para a area desejada serão comprados %.2fKg e custara R$%.2f",quilos, custo);
	
	}
}
