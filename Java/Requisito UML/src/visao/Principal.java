package visao;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import modelo.*;

public class Principal {

	static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	static int valor = 0;
	static Scanner input = new Scanner(System.in);
	static int id = 0;
	static Aluno[] alunos = new Aluno[10];
	
	public static void main(String[] args) throws IOException, ParseException {
		
		int menu = 0;
		while(menu != 8) {
			System.out.println("1.Cadastrar Aluno\t2.Cadastrar Nota\n3.Listar Alunos\t4.Listar Notas\n5.Buscar Aluno\t6.Listar Aprovados\n7.Listar Reprovados\tSair");
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
		id++;
		System.out.println("Nome  Sobrenome\tdata de Nascimento");
		alunos[valor] =  new Aluno(id, input.next(), input.next(), df.parse(input.next()));
		valor++;
	}
	public static void cadNota() {
		System.out.println("Qual aluno?");
		String u = input.next();
		for(int i = 0; i < valor; i++) {
			if((alunos[i].nome).equalsIgnoreCase(u)) {
				for(int j = 0; j < 4; j++) {
					System.out.println("Componente\t 1 2 3\t\t(caso não tenha sido avaliado coloque -1)");
					alunos[i].notas[j] = new Nota(input.next(), input.nextInt(), input.nextInt(), input.nextInt());
				}
			}
		}
		
	}
	public static String listaAluno() {
		System.out.println("ID.\t Nome.\tIdade.");
		for(int i = 0; i < valor; i++) {
			System.out.println(alunos[i].formatAluno());
		}
	return null;
	}
	public static String listaNotas() {
		for(int i = 0; i < valor; i++) {
			for(int j = 0; j < 4; j++){
				System.out.println(alunos[i].formatLista());
			}
		}
	return null;
	}
	public static Aluno buscarAluno() {
		System.out.println("Qual aluno?");
		String u = input.next();
		for(int i = 0; i < valor; i++) {
			if((alunos[i].nome).equalsIgnoreCase(u)) {
					System.out.println(alunos[i].formatLista());
			}
		}
	return null;
	}
	public static String listaAprovado() {
		for(int i = 0; i < valor; i++) {
			if(!alunos[i].conceito)
			System.out.println(alunos[i].listaApRep());
		}
	return null;
	}
	public static String listaReprovado() {
		for(int i = 0; i < valor; i++) {
			if(alunos[i].conceito)
			System.out.println(alunos[i].listaApRep());
		}
	return null;
	}
}
