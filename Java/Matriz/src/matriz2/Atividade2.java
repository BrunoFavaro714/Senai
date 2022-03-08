package matriz2;

import java.util.Scanner;

public class Atividade2 {

	static int size = 10;
	static Scanner input = new Scanner(System.in);
	public static void main(String[] args) {
		
		Database[] matri = new Database[size];
		Database[] org = new Database[size];
		int menu = 0;
		while(menu != 3) {
			System.out.println("1.Cadastrar\t2.Matriculas\n3.Sair");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				matri = cadastrar();
				org = organizador(matri);
				break;
			case 2:
				matriculas(org);
				menu(org);
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
		System.out.println("Gostaria de procurar um aluno?Se sim como? (ID/Nome)");
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
		int[] media = new int[size];
		while(menu != 3) {
			System.out.println("1.Agregar Notas\t2.Verificar Aprovados\n3.Sair");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				media = agregarNota(matri);
				break;
			case 2:
				media(matri, media);
				break;
			case 3:
				break;
			default:
				break;
			}
		}
	}
	
	public static int[] agregarNota(Database[] aluno) {
		int[] notas = new int[3];
		int[] valor = new int[size];
		String[] aprov = new String[size];
		
		System.out.println("Insira as notas dos alunos ");
		
		for(int j = 0; j < valor.length; j++) {
			System.out.println(aluno[j].output());
				System.out.print("1º nota:");
				notas[0] = input.nextInt();
				System.out.print("2º nota:");
				notas[1] = input.nextInt();
				System.out.print("3º nota:");
				notas[2] = input.nextInt();
			valor[j] = ((notas[0]*5)+(notas[1]*3)+(notas[2]*2))/10;
			
				
		}
		return valor;
	}
		
	public static void media(Database[] Aluno, int[] nota) {
		String[] aprov = new String[size];
		for(int i = 0; i < size; i++) {
			
			if(nota[i] >5) {
				aprov[i] = "Aprovado";
			}else {
				aprov[i] = "Reprovado";
			}
				System.out.println(Aluno[i].outputMedia()+nota[i]+"\t"+aprov[i]);
		}
	}
	public static Database[] organizador(Database[] matri) {
		Database[] aux = new Database[size];
		Database[] org = new Database[size];
		
		for(int i = 0; i < matri.length; i++) {
			org[i] = matri[i];
		}
		for(int i = 0; i < matri.length; i++) {
			for(int j = 0; j < matri.length; j++) {
				int val = matri[j].name.compareTo(matri[i].name);
				if(val < 0) {
					aux[i] = org[i];
					org[i] = org[j];
					org[j] = aux[i];
				}
			}
		}
		return org;
	}
}
