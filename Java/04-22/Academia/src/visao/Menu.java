package visao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import modelo.*;

public class Menu {

	private static Scanner input = new Scanner(System.in);
	private static Aparelho[] aparelhos = new Aparelho[10];
	private static int contApar = 0;
	private static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	
	public static void main(String[] args) throws ParseException {
		int opcao = 0;
		while(opcao != 3) {
			System.out.print("1. Cadastrar Aparelho\t2. Listar Aparelhos\nOpção: ");
			opcao = input.nextInt();
			switch (opcao) {
				
					case 1:
						cadastrarAparelho();
						break;
					case 2:
						listarAparelhos();
						break;
					case 3:
						System.out.println("vlw flw");
						break;
			}
		}
	}
	private static void cadastrarAparelho() throws ParseException {
		System.out.println("Nome\tTipo\tGrupo Muscular\tData de Aquisição\tPreço do Equipamento");
		aparelhos[contApar] = new Aparelho(input.next(), input.next(), input.next(), df.parse(input.next()), input.nextDouble());
		contApar++;
	}
	private static void listarAparelhos() {
		System.out.println("Nome\tTipo\tGrupo Muscular\tData de Aquisição\tPreço depreciado do Equipamento");
		for(int i = 0; i < contApar; i++) {
			System.out.println(aparelhos[i].paraString());
		}
	}
}
