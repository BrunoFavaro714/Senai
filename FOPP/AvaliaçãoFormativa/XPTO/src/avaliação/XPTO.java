package avaliação;

import java.util.Scanner;

public class XPTO {

	public static Scanner input = new Scanner(System.in);
	public static void main(String[] args) {
		String name = "";
		double salario;
		System.out.println("Digite Seu Nome Completo: ");
		name = input.nextLine();
		System.out.println("Digite Seu Salario: ");
		salario = input.nextDouble();
		
		int opcao = 0;
		while (opcao != 4) {
			System.out.println("1-Programa INSS\t2-Programa IRRF\t3-Programa FGTS");
			System.out.println("4-Saida");
			opcao = input.nextInt();
			switch (opcao) {
			case 1:
				INSS();
				break;
			case 2:
				IRRF();
				break;
			case 3:
				FGTS();
				break;
			case 4:
				System.out.println("Até logo "+ name);
				
				break;
			default:
				System.out.println();
				break;
			}
			
			
		}
		
	}
	public static double INSS() {
		
		double salario, desconto;
		float porcentagem;
		
		
		if(salario > 7087.22) {
			porcentagem = 0f;
		}else if(salario > 3641.03) {
			porcentagem = 14f;
		}else if(salario > 2427.35){
			porcentagem = 12f;
		}else if(salario > 1212.01){
			porcentagem = 9f;
		} else {
			porcentagem = 7.5f;		
		}
		
		
		if(porcentagem == 0f)
			desconto = 992.21;
		else
			desconto = salario * porcentagem / 100;	
		
		System.out.printf("O Desconto do INSS é de %.2f", desconto);
		
	}
	public static void IRRF() {
		input = new Scanner(System.in);
		double salario, desconto, percen;
		
		salario = INSS();
		
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
		
		System.out.printf("Desconto do IRRF é de %.2f", desconto);
		
	}
	public static void FGTS() {
		double salario, acrecimo;
		
		acrecimo = salario * 8/100;
		System.out.printf("FGTS: R$%.2f", acrecimo);
		
	}
}
