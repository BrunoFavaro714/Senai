package visao;

import java.util.Random;
import java.util.Scanner;
import modelo.Turma;

public class Menu {

	private static Scanner scan = new Scanner(System.in);
	private static Turma turma = new Turma();
	
	public static void main(String[] args) {
		System.out.print("Digite quantos alunos a turma possui:");
		turma.preencherVetor(scan.nextInt());
		turma.listarTodos();
		
		
		Random ale = new Random();
		int alunos[] = new int[32];
		boolean repetido = false;
		for (int i = 0; i < alunos.length; i++) {		
			do {
				alunos[i] = ale.nextInt(32);
				repetido = false;
				for (int j = 0; j < alunos.length; j++) {
					if (alunos[i] == alunos[j] && i != j) {
						repetido = true;
					}
				}
			} while (repetido);
		}
		
		
		System.out.println();
		int k = 0;
		for (int i = 0; i < 8; i++) {
			System.out.println("---------------------------");
			for (int j = 0; j < 4; j++) {
				System.out.print(alunos[k] + " ");
				System.out.println(turma.grupos(alunos[k]));
				k++;
			}
			System.out.println("---------------------------");
		}
	}

}
