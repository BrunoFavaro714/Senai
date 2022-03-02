package agenda;

import java.util.Scanner;

public class Agenda05 {

	static Scanner input = new Scanner(System.in);
	public static void main(String[] args) {
		
		System.out.println("Quantos contatos quer armazenar?");
		int agenda = input.nextInt();
		
		Contato[] contatos = new Contato[agenda];
		
		System.out.println("id\tNome\tIdade\tNumero");
		for(int i = 0; i < agenda; i++) {
			contatos[i] = new Contato();
			contatos[i].id = input.nextInt();
			contatos[i].name = input.next();
			contatos[i].age = input.nextInt();
			contatos[i].number = input.next();
			System.out.println("-------------------");
		}
		
		System.out.println("id\tNome\tIdade\tNumero");
		for(int i = 0; i < agenda; i++) {
			System.out.println(contatos[i].tabing());
		}
	}
	
}
