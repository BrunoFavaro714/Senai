package control;

import java.util.ArrayList;
import model.Login;

public class ProcessaLogin {
	
	public static ArrayList<Login> logins = new ArrayList<>();
	private DAO dao = new DAO();
	
	public void login(String usuario, String senha) {
		
		logins = dao.abrir();
		
		boolean usuarioEnc = false, senhaEnc = false;
		
		for (Login l : logins) {
			if(usuario.equals(l.getUsuario()) && senha.equals(l.getSenha())) {
				usuarioEnc = true;
				senhaEnc = true;
				break;
			}else if(usuario.equals(l.getUsuario()) && !(senha.equals(l.getSenha()))) {
				usuarioEnc = true;
				senhaEnc = false;
			}
		}
		
		if(usuarioEnc && senhaEnc) {
			System.out.println("Acesso permitido");
		}else if(usuarioEnc && !(senhaEnc)){
			System.out.println("Acesso negado");
		}else{
			System.out.println("usuário não encontrado");
		}

	}
	
}
