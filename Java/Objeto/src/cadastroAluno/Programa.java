package cadastroAluno;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class Programa {

	static Scanner input = new Scanner(System.in);
	public static void main(String[] args) {
		
		
		
		int menu = 0;
		while(menu != 7) {
			System.out.println("1. 2. 3. 4. 5. 6. 7.Sair");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				CadAluno();
				break;
			case 2:
				CadNota();
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
	public static void CadAluno() {
		System.out.println("quantos cad");
		int qtd = input.nextInt();
		Cadastros[] aluno = new Cadastros[10];
		int dataNasc, k = 1;
		Date date = new Date();
		String ano;
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
		int data = Integer.parseInt(sdf.format(date));
		
		System.out.println("Nome\tSobreNome\tanoNasc");
		for(int i = 0; i < qtd; i++) {
			aluno[i] = new Cadastros();
			aluno[i].id = k;
			aluno[i].nome = input.next();
			aluno[i].sobrenome = input.next();
			ano = input.next();
			dataNasc = Integer.parseInt(ano);
			aluno[i].idade = data - dataNasc;
			k++;
		}
		
	}
	public static void CadNota() {
		
	}
}
