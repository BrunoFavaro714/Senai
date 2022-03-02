package avaliacao;

import java.util.Scanner;

public class XPTO {

	static double salario, inss, irrf, fgts;
	public static Scanner input = new Scanner(System.in);
	public static void main(String[] args) {
		String name = "";
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
				System.out.println("Até logo "+ name +"\n");
				System.out.println("Seu salario bruto é de R$"+ salario +"\n");
				INSS();
				System.out.println("Seu salario apos aplicação do INSS é de R$"+ inss +"\n");
				IRRF();
				System.out.println("Seu salario apos aplicação do IRRF é de R$"+ irrf +"\n");
				FGTS();
				break;
			default:
				System.out.println("Opção invalida!");
				break;
			}
			
			
		}
		
	}
	public static double INSS() {
		
		double desconto;
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
		
		System.out.printf("O Desconto do INSS é de %.2f\n\n", desconto);
		inss = salario - desconto;
		return inss;
	}
	public static double IRRF() {
		input = new Scanner(System.in);
		double desconto, percen;
		
		
		if (inss > 4664.68) {
			percen = 27.5;
			desconto = inss * (percen/100);
		} else if (inss > 3751.06) {
			percen = 22.5;
			desconto = inss * (percen/100);
		}else if (inss > 2826.66) {
			percen = 15;
			desconto = inss * (percen/100);
		} else if (inss > 1903.99) {
			percen = 7.5;
			desconto = inss * (percen/100);
		} else {
			percen = 0;
			desconto = 0;
		}
		
		System.out.printf("Desconto do IRRF é de %.2f\n\n", desconto);
		irrf = inss - desconto;
		return irrf;
	}
	public static double FGTS() {
		double acrecimo;
		
		acrecimo = salario * 8/100;
		System.out.printf("FGTS: R$%.2f\n\n", acrecimo);
		return fgts;
	}
}