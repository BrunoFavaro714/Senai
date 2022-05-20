package controle;

import java.util.ArrayList;

import modelo.Manutencao;

public class ProcessaManutencao {

	public static ArrayList<Manutencao> manutencoes = new ArrayList<>();
	private static ManutencaoDAO md = new ManutencaoDAO();
	
	public static void salvar() {
		md.escrever(manutencoes);
	}
	public static void abrir() {
		manutencoes = md.ler();
		if(manutencoes.size() == 0) {
			manutencoes.add(new Manutencao(1, "20/05/2021", "motor", 100.00, 3.0));
		}
	}
}
