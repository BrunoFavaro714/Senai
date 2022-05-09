package control;

import java.util.ArrayList;

import model.Alunos;

public class ProcessaAluno {

	public static ArrayList<Alunos> linhas = new ArrayList<>();
	private static DAO dao = new DAO();
	
	public static void carregar() {
		linhas = dao.abrir();
	}
	
	public static void salvar() {
		dao.salvar(linhas);
		
		System.out.println("Media Calculada com Sucesso!");
	}
}
