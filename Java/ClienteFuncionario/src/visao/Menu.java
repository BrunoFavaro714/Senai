package visao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Scanner;
import modelo.*;

public class Menu {

	private static Scanner input = new Scanner(System.in);
	private static int opcao = 0;
	private static String[] funcionalidades = {"Cadastrar Funcionario", "Cadastar Cliente\t", "Listar Funcionario(s)", "Listar Cliente(s)\t","Cadastrar Vendas\t","Listar Vendas\t", "Sair\t\t\t"};
	private static int id = 0, matricula = 0;
	private static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yy");
	
	private static ArrayList<Cliente> clientes = new ArrayList<>();
	private static ArrayList<Funcionario> funcionarios = new ArrayList<>();
	private static ArrayList<Venda> vendas = new ArrayList<>();
	
	public static void main(String[] args) throws ParseException {
		//int[] funcionarioId = {1, 2, 3};
		//String[] funcionario = {"Bruno", "Enzo", "Enhique"};
		//String[] senha = {"Bru123", "Enz123", "Enh123"};
		
		while(opcao != 7) {
			System.out.println("Opção");
			opcao = menu(funcionalidades);
			switch(opcao) {
			case 1:
				cadFuncionario();
				break;
			case 2:
				cadCliente();
				break;
			case 3:
				listaFuncionario();
				break;
			case 4: 
				listaCliente();
				break;
			case 5:
				vendas();
				break;
			case 6:
				listarVenda();
				break;
			case 7:
				System.out.println("Some!");
				break;
			default:
				break;
			}
		}
	}

	

	private static void vendas() {
		Venda venda = new Venda();
		System.out.println("Digite o ID do Cliente:");
		int clienteID = input.nextInt();
		venda.setCodCliente(clienteID);
		
		System.out.println("Digite o ID do Funcionario:");
		int funcionarioID = input.nextInt();
		venda.setCodFuncionario(funcionarioID);
		
		System.out.println("Valor da compra:");
		float compra = input.nextFloat();
		venda.setValor(compra);
		
		for (Cliente c : clientes) {
			if(c.getId() == clienteID) {
				if(c.getCreditoLimite() > compra) {
					c.setCreditoLimite((c.getCreditoLimite()-compra));
				}else {
					System.out.println("Saldo Insuficiente");
				}
			}
		}
		for (Funcionario f : funcionarios) {
			if(f.getMatricula() == funcionarioID) {
				f.setComicao((f.getComicao()+(compra*0.10)));
			}
		}
		
		
		
		
		vendas.add(venda);
	}

	private static void cadCliente() throws ParseException {
		System.out.println("Nome\tNumero\tData de Nascimento");
		id++;
		Cliente cliente = new Cliente(input.next(), input.next(), df.parse(input.next()));
		cliente.setId(id);
		System.out.println("Credito Limite");
		cliente.setCreditoLimite(input.nextDouble());
		clientes.add(cliente);
	}

	private static void cadFuncionario() throws ParseException {
		System.out.println("Nome\tNumero\tData de Nascimento");
		matricula++;
		Funcionario funcionario = new Funcionario(input.next(), input.next(), df.parse(input.next()));
		funcionario.setMatricula(matricula);
		funcionarios.add(funcionario);
	} 

	private static void listaCliente() {
		for (Cliente c : clientes) {
			System.out.println(c.toString());
		}
	}

	private static void listaFuncionario() {
		for (Funcionario f : funcionarios) {
			System.out.println(f.toString());
		}
	}
	
	private static void listarVenda() {
		for (Venda v : vendas) {
			System.out.println(v.toString());
		}
	}

	private static int menu(String[] itens) {
		System.out.println("\t._______________________________.");
		for (int i = 0; i < itens.length; i++) {
			System.out.println("\t|" + (i + 1) + "." + itens[i] + "\t|");
		}
		System.out.println("\t:_______Escolha uma opção_______:");
		return input.nextInt();
	}
}
