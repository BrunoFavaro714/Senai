package visao;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import modelo.*;

public class Principal {

	static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	static int valor = 1;
	static Scanner input = new Scanner(System.in);
	static Aluno[] alunos = new Aluno[10];
	
	public static void main(String[] args) throws IOException, ParseException {
		
		int menu = 0;
		while(menu != 8) {
			System.out.println("1. 2. 3. 4. 5. 6. 7.Sair");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				cadAluno();
				break;
			case 2:
				cadNota();
				break;
			case 3:
				listaAluno();
				break;
			case 4:
				listaNotas();
				break;
			case 5:
				buscarAluno();
				break;
			case 6:
				listaAprovado();
				break;
			case 7:
				listaReprovado();
				break;
			case 8:
				System.out.println("Até!");
				break;
			default:
				System.out.println("Opção invalida!!!");
				break;
			}
		}
	}
	public static void cadAluno() throws ParseException {
		System.out.println("qtd");
		int qtd = input.nextInt();
		System.out.println("Nome\tIdade\tData de Nascimento");
		System.out.println("\t\t(dd/MM/yyyy)");
		for(int i = 0; i < qtd; i++) {
			alunos[i] = new Aluno();
			alunos[i].id = i+1;
			alunos[i].nome = input.next();
			alunos[i].sobrenome = input.next();
			alunos[i].dataNas = df.parse(input.next());
			System.out.println("----------------------");
			valor++;
		}
	}
	public static void cadNota() {
		System.out.println("Deseja cadastrar um ou multiplos alunos? (1.apenas um/2.multiplos)");
		int qtd = input.nextInt();
		
		if(qtd == 2) {
			for(int i = 0; i < valor; i++) {
				alunos[i] = new Aluno();
				System.out.println("Aluno");
				System.out.println("Componente: \tNota.1\tNota.2\tNota.3");
				Nota[] nota = alunos[i].notas;
				nota[i].componente = input.next();
				for(int j = 0; j < 3; j++) {
					
					nota[i].nota[j] = input.nextFloat();
				}
			}
		}else if(qtd == 1) {
			System.out.println("Qual Aluno?");
			String busca = input.next();
			for(int i = 0; i < valor; i++) {
				alunos[i] = new Aluno();
				if(alunos[i].nome.equalsIgnoreCase(busca)) {
					Nota[] nota = alunos[i].notas;
					nota[i].componente = input.next();
					for(int j = 0; j < 3; j++) {
						nota[i].nota[j] = input.nextFloat();
					}
					break;
				}
			}
		}
		
	}
	public static String listaAluno() {
		
	return null;
	}
	public static String listaNotas() {
		
	return null;
	}
	public static Aluno buscarAluno() {
	return null;
	}
	public static String listaAprovado() {
	
	return null;
	}
	public static String listaReprovado() {
		
	return null;
	}
}
