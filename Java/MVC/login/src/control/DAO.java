package control;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

import model.Login;

public class DAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String entrada = "C:\\Senai 1�DES\\JavaWorkspace\\MVC_login\\Arquivos\\entrada.csv";
	
	public ArrayList<Login> abrir(){
		ArrayList<Login> linhas = new ArrayList<>();
		Login l;
		try {
			br = new BufferedReader(new FileReader(entrada));
			String linha = br.readLine();
			while(linha != null) {
				l = new Login(linha);
				linhas.add(l);
				linha = br.readLine().toString();
			}
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		return linhas;
	}
	
}
