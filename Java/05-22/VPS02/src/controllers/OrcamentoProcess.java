package controllers;

import java.util.ArrayList;

import models.OrcamentoDAO;
import models.Orcamento;

public class OrcamentoProcess {

	public static ArrayList<Orcamento> orcamentos = new ArrayList<>();
	private static OrcamentoDAO od = new OrcamentoDAO();
	
	public static void abrir() {
		orcamentos = od.ler();
	}
	
	public static void salvar() {
		od.escrever(orcamentos);
	}
}
