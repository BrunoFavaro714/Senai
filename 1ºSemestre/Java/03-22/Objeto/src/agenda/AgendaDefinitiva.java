package agenda;

import java.util.Scanner;

public class AgendaDefinitiva {

	static Scanner input = new Scanner(System.in);
	public static void main(String[] args) {
		System.out.println("Quantos contatos deseja adicionar?");
		int qCont = input.nextInt();
		
		Contato[] contatos = new Contato[qCont];
		System.out.println("Nome\tIdade\tNumero");
		for(int i = 0; i < qCont; i++) {
			contatos[i] = new Contato();
			contatos[i].id = i+1;
			contatos[i].name = input.next();
			contatos[i].age = input.nextInt();
			contatos[i].number = input.next();
			System.out.println("----------------------");
		}
		
		int menu = 0;
		
		while(menu != 5) {
			System.out.println("Voc� gostarida de\n1.Mostrar Todos\n2.Buscar por ID\n3.Buscar por Nome\n4.Buscar por Telefone\n5.Sair(contatos ser�o perdidos!!!)");
			menu = input.nextInt();
			
			switch(menu) {
			case 1:
				showAll(qCont, contatos);
				break;
			case 2:
				showID(contatos);
				break;
			case 3:
				showName(contatos);
				break;
			case 4:
				showNumber(contatos);
				break;
			case 5:
				System.out.println("At� logo!");
				break;
			default:
				System.out.println("Op��o invalida! por favor tente novamente.");
				break;
			}
		}
	}
	public static void showAll(int qCont, Contato[] contatos) {
		for(int i = 0; i < qCont; i++) {
			System.out.println(contatos[i].tabing());
		}
	}
	public static void showID(Contato[] contatos) {
		System.out.print("qual ID voc� deseja encontrar? ");
		int u = input.nextInt();
		
		for(int i = 0; i < contatos.length; i++) {
			if(contatos[i].id  == u) {
				System.out.println(contatos[i].tabing());
			}
		}
	}
	public static void showName(Contato[] contatos) {
		System.out.print("qual nome voc� deseja encontrar? ");
		String u = input.next();
		
		for(int i = 0; i < contatos.length; i++) {
			String name = contatos[i].name;
			if(name.equalsIgnoreCase(u)) {
				System.out.println(contatos[i].tabing());
			}
		}
	}
	public static void showNumber(Contato[] contatos) {
		System.out.print("qual numero voc� deseja encontrar? ");
		String u = input.next();
		
		for(int i = 0; i < contatos.length; i++) {
			String number = contatos[i].number;
			if(number.equals(u)) {
				System.out.println(contatos[i].tabing());
			}
		}
	}
}
