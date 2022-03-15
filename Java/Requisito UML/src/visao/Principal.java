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
				System.out.println("At�!");
				break;
			default:
				System.out.println("Op��o invalida!!!");
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
			for(int j = 0; i < 4; j++) {
				if((alunos[i].nome).equalsIgnoreCase(u)) {
					System.out.println("Componente\t 1 2 3\t\t(caso n�o tenha sido avaliado coloque -1)");
					alunos[i].notas[j] = new Nota(input.next(), input.nextInt(), input.nextInt(), input.nextInt());
				}
			}
		}
		
	}
	public static String listaAluno() {
		for(int i = 0; i < valor; i++) {
			System.out.println(alunos[i].formatAluno());
		}
	return null;
	}
	public static String listaNotas() {
		for(int i = 0; i < valor; i++) {
			System.out.println(alunos[i].formatMedia());
		}
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
