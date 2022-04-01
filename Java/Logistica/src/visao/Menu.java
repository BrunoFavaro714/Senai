package visao;

import java.util.ArrayList;
import java.util.Scanner;

import modelo.*;

public class Menu {

	private static Scanner input = new Scanner(System.in);
	private static int opcao = 0;
	private static String[] funcionalidades = {"Cadastrar Gato", "Cadastrar Cachorro", "Listar Gato\t", "Listar Cachorro", "Sair\t\t"};
	
	private static ArrayList<Cat> gatos = new ArrayList<>();
	private static ArrayList<Dog> cachorros = new ArrayList<>();
	
	public static void main(String[] args) {
		while (opcao != 5) {
			System.out.print("Opção: ");
			opcao = menu(funcionalidades);
			switch (opcao) {
			case 1:
				cadGato();
				break;
			case 2:
				cadCach();
				break;
			case 3:
				listarGato();
				break;
			case 4:
				listarCach();
				break;
			case 5:
				System.out.println("Até logo e volte sempre.");
				break;
			default:
				System.out.println("Opção inválida");
				break;
			}
		}
	}
	private static int menu(String[] itens) {
		System.out.println("\t._______________________.");
		for (int i = 0; i < itens.length; i++) {
			System.out.println("\t|" + (i + 1) + "." + itens[i] + "\t|");
		}
		System.out.println("\t:___Escolha uma opção___:");
		return input.nextInt();
	}
	private static void cadGato(){
		System.out.println("Especie\tNome\tPeso\tRaca\tVidas");
		Cat gato = new Cat(input.next(), input.next(), input.nextFloat(), input.next(), input.nextInt());
		gatos.add(gato);
	}
	private static void cadCach(){
		System.out.println("Especie\tNome\tPeso\tRaca\tMotoqueiros Atacados");
		Dog cachorro = new Dog(input.next(), input.next(), input.nextFloat(), input.next(), input.nextInt());
		cachorros.add(cachorro);
	}
	private static void listarGato() {
		for(Cat g : gatos) {
			System.out.println(g.toString());
		}
	}
	private static void listarCach() {
		for(Dog c : cachorros) {
			System.out.println(c.toString());
		}
	}
}
