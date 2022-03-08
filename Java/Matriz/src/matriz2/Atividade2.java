package matriz2;

import java.util.Scanner;

public class Atividade2 {

	static int size = 10;
	static Scanner input = new Scanner(System.in);
	public static void main(String[] args) {
		
		Database[] matri = new Database[size];
		int menu = 0;
		while(menu != 3) {
			System.out.println("1.Cadastrar\t2.Matriculas\n3.Sair");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				matri = cadastrar();
				break;
			case 2:
				matriculas(matri);
				menu(matri);
				break;
			case 3:
				break;
			default:
				break;
			}
		}
		
	}
	public static Database[] cadastrar() {
		
		Database[] aluno = new Database[size];
		
		System.out.println("Nome, Sobrenome e idade do aluno:");
		for(int i = 0; i < aluno.length; i++) {
			aluno[i] = new Database();
			aluno[i].id = (i+1);
			aluno[i].name = input.next();
			aluno[i].surname = input.next();
			aluno[i].age = input.nextInt();
			System.out.println("-------------------");
		}
		return aluno;
	}
	public static void matriculas(Database[] aluno) {
		System.out.println("Como gostaria de procurar? (ID/Nome)");
		String p = input.next();
		
		int k = 0;
		if(p.equalsIgnoreCase("Nome")) {
			System.out.println("Qual nome você procura?");
			String u = input.next();
			
			for(int i = 0; i < size; i++) {
				if(aluno[i].name.equalsIgnoreCase(u)) {
					System.out.println(aluno[i].output());
					k+=i;
				}
			}
		}else if(p.equalsIgnoreCase("ID")) {
			System.out.println("Qual id você procura?");
			int u = input.nextInt();
			
			for(int i = 0; i < size; i++) {
				if(aluno[i].id == u) {
					System.out.println(aluno[i].output());
					k+=i;
				}
			}
		}
	}
	public static void menu(Database[] matri) {
		int menu = 0;
		while(menu != 3) {
			System.out.println("1.Agregar Notas\t2.Media\n3.Sair");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				agregarNota(matri);
				break;
			case 2:
				media();
				break;
			case 3:
				break;
			default:
				break;
			}
		}
	}
	
	public static void agregarNota(Database[] aluno) {
		int[] notas = new int[3];
		Database[] valor = new Database[size];
		
		System.out.print("Insira as notas do aluno ");
		
		for(int j = 0; j < valor.length; j++) {
			System.out.println(aluno[j].output());
			for(int i = 0; i < notas.length; i++) {
				System.out.print((i+1) + "º nota:");
				notas[i] = input.nextInt();
			}
			valor[j].media = ((notas[0]*5)+(notas[1]*3)+(notas[2]*2))/10;
		}
		
	}
		
	public static void media() {
		
	}
}
