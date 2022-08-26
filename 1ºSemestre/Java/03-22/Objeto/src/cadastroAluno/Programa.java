package cadastroAluno;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class Programa {

	static int vagas = 0;
	static Scanner input = new Scanner(System.in);
	
	public static void main(String[] args) {
		
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
				CadAluno(id, nome, sobrenome, idade, aprov);
				organizador(id, nome, sobrenome, idade);
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
	public static void CadAluno(int[] id, String[] nome, String[] sobrenome, int[] idade, boolean[] aprov) {
		System.out.println("quantos cad");
		int qtd = input.nextInt();
		int dataNasc;
		Date date = new Date();
		String ano;
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
		int data = Integer.parseInt(sdf.format(date));
		
		System.out.println("Nome\tSobreNome\tanoNasc");
		for(int i = vagas; i < qtd; i++) {
			id[i] = (i+1);
			nome[i] = input.next();
			sobrenome[i] = input.next();
			ano = input.next();
			dataNasc = Integer.parseInt(ano);
			idade[i] = data - dataNasc;
			aprov[i] = false;
			vagas++;
		}
		
		
	}
	public static void CadNota(int[] id, String[] nome, String[] sobrenome, int[] media) {
		
		System.out.println("Quantas Comp");
		int compo = input.nextInt();
		
		int k, q;
		
		for(int i = 0; i < vagas; i++) {
			k = 0;
			q = 0;
			System.out.println("Id: "+id[i] + " Nome: " + nome[i] + " " + sobrenome[i]);
			System.out.println("Digite a nota e o peso: ");
			for(int j = 0; j < compo; j++) {
				int nota = input.nextInt();
				int peso = input.nextInt();
				q = q+(nota*peso);
				k+=peso;
				System.out.println("----------------------");
			}
			media[i] = q/k;
		}
	}
	public static void organizador(int[] id, String[] nome, String[] sobrenome, int[] idade) {
		int aux;
		String auxS;
		for(int i = 0; i < vagas; i++) {
			for(int j = 0; j < vagas; j++) {
				if(nome[i].compareTo(nome[j]) < nome[j].compareTo(nome[i])) {
					aux = id[i];
					id[i] = id[j];
					id[j] = aux;
					
					auxS = nome[i];
					nome[i] = nome[j];
					nome[j] = auxS;
					
					auxS = sobrenome[i];
					sobrenome[i] = sobrenome[j];
					sobrenome[j] = auxS;
					
					aux = idade[i];
					idade[i] = idade[j];
					idade[j] = aux;
				}
			}
		}
	}
}
