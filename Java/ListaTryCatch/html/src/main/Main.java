package main;

import java.util.Scanner;

public class Main {

	private static Arquivo arq = new Arquivo();
	private static Scanner input = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		arq.in("<!DOCTYPE html>\r\n"
				+ "<html lang=\"en\">\r\n"
				+ "<head>\r\n"
				+ "    <meta charset=\"UTF-8\">\r\n"
				+ "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n"
				+ "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n"
				+ "	   <link rel=\"stylesheet\" href=\"style.css\">"
				+ "    <title>Document</title>\r\n"
				+ "</head>\r\n"
				+ "<body>");
		
		int opcao = 0;
		while(opcao != 11) {
			System.out.println("1.Criar Div\t2.Personalizar Div"
								+ "\n3.Criar Span\t4.Personalizar Span"
								+ "\n5.Criar Paragrafo\t6.Personalizar Paragrafo"
								+ "\n7.Criar Nav\t8.Personalizar Nav"
								+ "\n9.Criar Tabela\t10.Peronalizar Tabela"
								+ "\n11.Finalizar");
			opcao = input.nextInt();
			input.nextLine();
			switch(opcao) {
				case 1:
					Div();
					break;
				case 2:
					cssDiv();
					break;
				case 3:
					Span();
					break;
				case 4:
					cssSpan();
					break;
				case 5:
					Para();
					break;
				case 6:
					cssPara();
					break;
				case 7:
					nav();
					break;
				case 8:
					cssNav();
					break;
				case 9:
					tabela();
					break;
				case 10:
					cssTabela();
					break;
				case 11:
					break;
				default:
					break;
			}
		}
		
		arq.in("</body>\r\n"
				+ "</html>");
	}

	private static void cssTabela() {
		arq.css("table{");
		System.out.println("Tamanho da tabela, altura e largura");
		arq.css("height: "+ input.nextLine()
				+ "width: "+ input.nextLine());
		System.out.println("Cor de fundo");
		arq.css("background-color: " + input.next());
		System.out.println("Cor e tamanho da fonte");
		arq.css("color: " + input.next()
				+ "font-size: "+ input.next());
		arq.css("}");
	}

	private static void cssNav() {
		System.out.println();
	}

	private static void cssPara() {
		System.out.println();
	}

	private static void cssSpan() {
		System.out.println();
	}

	private static void cssDiv() {
		System.out.println();
	}

	private static void tabela() {
		arq.in("<table>");
		System.out.println("Insira as dimensões da tabela: (Vertical/Horizontal)");
		int hori = input.nextInt(); 
		int vert = input.nextInt();
		input.nextLine();
		System.out.println("Insira conteudo da posição:");
		arq.in("<tbody>");
		for(int i = 0; i < vert; i++) {
			arq.in("<tr>");
			for(int j = 0; j < hori; j++) {
				System.out.println((i+1)+" "+(j+1));
				arq.in("<td>"+input.nextLine()+"</td>");
			}
			arq.in("</tr>");
		}
		arq.in("</tbody>\r\n"
				+ "</table>");
		
	}

	private static void nav() {
		arq.in("<div>\r\n"
				+ "<ul>");
		System.out.println("Quantas opções serão?");
		int opcoes = input.nextInt();
		input.nextLine();
		
		for(int i = 0; i < opcoes; i++) {
			System.out.println("insira conteudo");
			arq.in("<li>"+input.nextLine()+"</li>");
		}
		arq.in("</ul>");
	}

	private static void Para() {
		System.out.println("insira o conteudo:");
		arq.in("<p>"+input.nextLine()+"</p>");
	}

	private static void Span() {
		System.out.println("insira o conteudo:");
		arq.in("<span>"+input.nextLine()+"</span>");
	}

	private static void Div() {
		System.out.println("inserir texto(1) ou imagem(2)?");
		int opcao = input.nextInt();
		input.nextLine();
		if(opcao == 1) {
			System.out.println("insira o conteudo:");
			arq.in("<div>"+input.nextLine()+"</div>");
		}else if(opcao == 2) {
			System.out.println("insira o nome e formato da imagem:");
			arq.in("<img src='"+input.next()+"'>" );
		}
	}
}
