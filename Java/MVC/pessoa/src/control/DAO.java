package control;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

import model.*;

public class DAO {

	private BufferedReader br;
	private BufferedWriter bw;
	private String entrada = "C:\\Senai 1°DES\\JavaWorkspace\\MVC_pessoas\\Arquivos\\entrada.csv";
	private String saida = "C:\\Senai 1°DES\\JavaWorkspace\\MVC_pessoas\\Arquivos\\saida.csv";
	
	public ArrayList<Pessoas> abrir(){
		ArrayList<Pessoas> pessoa = new ArrayList<>();
		Pessoas p;
		try {
			br = new BufferedReader(new FileReader(entrada));
			String linha = br.readLine();
			while(linha != null) {
				p = new Pessoas(linha);
				pessoa.add(p);
				linha = br.readLine();
			}
			br.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		return pessoa;
	}
	public void salvar(ArrayList<Pessoas> linha) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Pessoas p : linha) {
				bw.write(p.pessoa()+"\r\n");
			}
			bw.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
	}
}
