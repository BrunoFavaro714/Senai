package exercicios;

import java.util.Scanner;

public class IRRF {

	public static void main(String[] args){
		Scanner leia = new Scanner(System.in);
		double salario, desconto, percen;
		
		System.out.print("Digite seu salario: ");
		salario = leia.nextDouble();
		
		if (salario > 4664.68) {
			percen = 27.5;
			desconto = salario * (percen/100);
		} else if (salario > 3751.06) {
			percen = 22.5;
			desconto = salario * (percen/100);
		}else if (salario > 2826.66) {
			percen = 15;
			desconto = salario * (percen/100);
		} else if (salario > 1903.99) {
			percen = 7.5;
			desconto = salario * (percen/100);
		} else {
			percen = 0;
			desconto = 0;
		}
		
		System.out.printf("foi descontado %.1f%%, totalizando R$%.2f",percen, desconto);
	
	}
}
