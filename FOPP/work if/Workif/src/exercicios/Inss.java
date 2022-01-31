package exercicios;

import java.util.Scanner;

public class Inss {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		double salario, salario2, desconto;
		
		System.out.print("Digite seu salario: ");
		salario = leia.nextDouble();
		
		if (salario > 7087.22) {
			desconto = 992.21;
			salario2 = salario - desconto;
		} else if (salario > 3641.03) {
			desconto = salario * 14/100;
			salario2 = salario - desconto;
		} else if (salario > 2427.35) {
			desconto = salario * 12/100;
			salario2 = salario - desconto;
		}else if (salario > 1212.01) {
			desconto = salario * 9/100;
			salario2 = salario - desconto;
		} else {
			desconto = salario * 7.5/100;
			salario2 = salario - desconto;
		}
		
		System.out.printf("foi descontado R$%.2f, totalisando R$%.2f", desconto, salario2);
		
	}
}
