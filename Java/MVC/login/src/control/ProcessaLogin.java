package control;

import java.util.ArrayList;

import model.Login;

public class ProcessaLogin {
	
	public static void login(String usuario, String senha) {
		
		DAO down = new DAO();
		ArrayList<Login> logins = new ArrayList<>();
		logins = down.abrir();
		
	}
}
