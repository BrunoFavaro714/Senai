package control;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;

import model.Login;

public class DAO {
	
	private BufferedReader br;
	private String entrada = "C:\\Senai 1°DES\\JavaWorkspace\\MVC_login\\Arquivos\\entrada.csv";
	
	public ArrayList<Login> abrir(){
		ArrayList<Login> linhas = new ArrayList<>();
		Login l;
		try {
			br = new BufferedReader(new FileReader(entrada));
			String linha = br.readLine();
			while(linha != null) {
				l = new Login(linha);
				linhas.add(l);
				linha = br.readLine();
			}
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		return linhas;
	}
	
}
