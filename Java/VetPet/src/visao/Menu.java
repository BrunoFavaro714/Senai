package visao;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

import modelo.Pet;
import modelo.Servico;

public class Menu {

	private static Scanner read = new Scanner(System.in);
	private static int opcao = 0;
	private static SimpleDateFormat dma = new SimpleDateFormat("dd/MM/yyyy");
	private static String funcionalidades[] = { "Cadastrar Animal/Pet", "Cadastrar Servico   ", "Listar todos os Pets", "Listar Serviços", "Sair                " };
	
	public static Date hoje = new Date();
	private static Pet[] pets = new Pet[10];
	private static Servico[] servicos = new Servico[100];
	private static int id = 0;
	private static int contPets = 0; 
	private static int contServicos = 0;

	public static void main(String[] args) throws IOException, ParseException {
		boolean sucesso = false;
		System.out.println("[ [ Gestão de Serviços de Banho e Tosa ] ]");
		while (opcao != 5) {
			System.out.print("Opção: ");
			opcao = menu(funcionalidades);
			switch (opcao) {
			case 1:
				sucesso = cadastrarAnimal();
				if (sucesso) {
					System.out.println("Animal/Pet cadastrado com sucesso.");
					contPets++;
				} else
					System.out.println("Erro ao cadastrar animal.");
				break;
			case 2:
				sucesso = cadastrarServico();
				if (sucesso) {
					System.out.println("Serviço registrado com sucesso.");
					contServicos++;
				} else
					System.out.println("Erro ao registrar serviço.");
				break;
			case 3:
				listarPets();
				break;
			case 4:
				listarServicos();
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
		return read.nextInt();
	}
	private static boolean cadastrarAnimal() {
		id++;
		String tipo[] = {"Gato                ", "Cachorro            ", "Outro               ", "Retornar            "};
		opcao = menu(tipo);
		if(opcao == 1) {
			System.out.println("Nome do Pet\tNome do Dono\tPeso");
			pets[contPets] = new Pet(id, "Gato", read.next(), read.next(), read.nextFloat());
			return true;
		}else if(opcao == 2) {
			System.out.println("Nome do Pet\tNome do Dono\tPeso");
			pets[contPets] = new Pet(id, "Cachorro", read.next(), read.next(), read.nextFloat());
			return true;
		}else if(opcao == 3) {
			System.out.println("Tipo\tNome do Pet\tNome Dono\tPeso");
			pets[contPets] = new Pet(id, read.next(), read.next(), read.next(), read.nextFloat());
			return true;
		}else {
			id--;
			return false;
		}
	}
	private static boolean cadastrarServico() throws ParseException {
		System.out.println("Para registrar um serviço, primeiro o pet deve estar cadastrado");
		System.out.println("Digite qual o id do pet/animal?");
		Pet animal = buscarAnimal(read.nextInt());
		if (animal != null) {
			System.out.println(animal.paraString());
			SimpleDateFormat hm = new SimpleDateFormat("HH:mm");
			String servico[] = {"Banho\t", "Tosa\t\t", "Especial\t", "Consulta\t", "Vacina\t"}; 
			opcao = menu(servico);
			System.out.println("Funcionário Designado");
			servicos[contServicos] = new Servico(animal, read.next(), servico[opcao], dma.format(hoje), hm.format(hoje));
			return true;
		} else {
			System.out.println("Pet não encontrado.");
			return false;
		}
	}

	private static Pet buscarAnimal(int idAnimal) {
		for (int i = 0; i < contPets; i++) {
			if (pets[i].idPet == idAnimal) {
				return pets[i];
			}
		}
		return null;
	}

	private static void listarPets() {
		System.out.println("Id\tTipo\tNomePet\tNome dono\tPeso");
		for (int i = 0; i < contPets; i++) {
			System.out.println(pets[i].paraString());
		}
	}

	private static void listarServicos() throws ParseException {
		System.out.println("Animal/Pet(id, tipo, nome, dono, peso)\tfuncionario\tDescrição\tData\tHora");
		for (int i = 0; i < contServicos; i++) {
			System.out.println(servicos[i].tabularString());
		}
		String[] subItens = { "Filtrar Serviços    ", "Filtrar Por data    " };
		opcao = menu(subItens);
		if (opcao == 1) {
			System.out.print("Digite o nome do animal ou do dono, ou funcionário, ou a descrição do serviço:");
			listarServicos(read.next());
		} else if (opcao == 2) {
			System.out.print("Digite a data em que o serviço foi realizado dd/mm/aaaa:");
			Date data = dma.parse(read.next());
			listarServicos(data);
		} else {
			System.out.println("Filtro inválido.");
		}
	}

	private static void listarServicos(String filtro) {
		System.out.println("Animal/Pet(id, tipo, nome, dono, peso)\tfuncionario\tDescrição\tData\tHora");
		for (int i = 0; i < contServicos; i++) {
			if (servicos[i].nomeFuncionario.equals(filtro) || servicos[i].descricao.equals(filtro)
					|| servicos[i].pet.nomePet.equals(filtro) || servicos[i].pet.nomeDono.equals(filtro)
					|| servicos[i].pet.tipoPet.equals(filtro))
				System.out.println(servicos[i].tabularString());
		}
	}
	private static void listarServicos(Date filtro) {
		System.out.println("Animal/Pet(id, tipo, nome, dono, peso)\tfuncionario\tDescrição\tData\tHora");
		for (int i = 0; i < contServicos; i++) {
			if (servicos[i].data.equals(filtro))
				System.out.println(servicos[i].tabularString());
		}
	}
}