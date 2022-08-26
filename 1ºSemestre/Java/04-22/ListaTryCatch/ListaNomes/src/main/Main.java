package main;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

public class Main {
	private static Arquivo arq = new Arquivo();
	private static Scanner input = new Scanner(System.in);
	private static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	

	@SuppressWarnings("deprecation")
	public static void main(String[] args) throws ParseException {
		int opcao = 0;
		while(opcao != 3) {
			System.out.println("1.Cadastrar\n2.Listar\n3.Sair");
			opcao = input.nextInt();
			input.nextLine();
			switch(opcao) {
				case 1:
					System.out.println("nome");
					String nome = input.nextLine();
					System.out.println("nascimento");
					String data = input.nextLine();
					
					String info = nome + "\t" + data;
					
					arq.writer(info);
					break;
				case 2:
					ArrayList<String> output = arq.ler();
					int idade;
					Date hoje = new Date();
					for (String linha : output) {
						String[] temp = linha.split("\t");
						Date nasc = df.parse(temp[1]);
						idade = hoje.getYear() - nasc.getYear();
						System.out.println(temp[0] + "\t" + idade);
					}
					break;
				case 3:
					System.out.println("Flw!");
					break;
				default:
					System.out.println("tente novamente!");
					break;
			}
		}
	}
}
