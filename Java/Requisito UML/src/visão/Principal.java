package visão;

import java.util.Scanner;

import modelo.*;



public class Principal {


	static int vagas = 0;
	static Scanner input = new Scanner(System.in);
	
	public static void main(String[] args) {
		Aluno aluno = new Aluno();
		
		int[] id = new int[10];
		int[] idade = new int[10];
		int[] media = new int[10];
		String[] nome = new String[10];
		String[] sobrenome = new String[10];
		boolean[] aprov = new boolean[10];
		
		int menu = 0;
		while(menu != 7) {
			System.out.println("1. 2. 3. 4. 5. 6. 7.Sair");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				aluno(id, nome, sobrenome, idade, aprov, vagas);
				organizador();
				break;
			case 2:
				CadNota(id, nome, sobrenome, media);
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			default:
				break;
			}
		}
	}
}
