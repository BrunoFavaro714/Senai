package vision;

import java.util.Scanner;

import control.*;

public class Menu {

	private static ProcessaLogin hold = new ProcessaLogin();
	private static Scanner input = new Scanner(System.in);
	
	public static void main(String[] args) {
		System.out.println("Digite o seu e-mail:");
		String usuario = input.next();
		System.out.println("Digite sua senha:");
		String senha = input.next();
		
		hold.login(usuario, senha);
	}

}
