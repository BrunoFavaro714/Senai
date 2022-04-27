package vision;

import java.util.Scanner;

import control.ProcessaLogin;

public class Menu {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		String email = "andre@gmail.com";
		String senha = "123mudar";
		
		ProcessaLogin.login(email, senha);
	}

}
