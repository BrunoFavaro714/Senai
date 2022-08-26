package control;


import java.util.ArrayList;

import model.*;

public class ProcessaPessoa {

	public static ArrayList<Pessoas> linhas = new ArrayList<>();
	private static DAO dao = new DAO();
	
	public static void carregar() {
		linhas = dao.abrir();
	}
	
	public static void salvar() {
		dao.salvar(linhas);
		
		System.out.println("Idade Calculada com Sucesso!");
	}
	
}
