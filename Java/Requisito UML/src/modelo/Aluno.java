package modelo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class Aluno {

	static Scanner input = new Scanner(System.in);
	public static void CadAluno(int[] id, String[] nome, String[] sobrenome, int[] idade, boolean[] aprov, int vagas) {
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
}
