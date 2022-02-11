package modelo;

import java.util.Scanner;

public class FGTS {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int quant = 3;
		
		String[] name = new String[quant];
		int[] salary = new int[quant];
		
		for (int i = 0; i < quant; i++) {
			System.out.print("Nome[" + i + "]: ");
			name[i] = input.next();
			System.out.print("Salario[" + i + "]: ");
			salary[i] = input.nextInt();
		}
		for (int i = 0; i < quant; i++) {
			System.out.println(name[i] +" R$"+ (salary[i] * 0.08));
		}
	}
}
