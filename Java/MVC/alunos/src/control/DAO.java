package control;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

import model.Alunos;

public class DAO {

	private BufferedReader br;
	private BufferedWriter bw;
	private String entrada = "C:\\Senai 1°DES\\JavaWorkspace\\MVC_alunos\\Arquivos\\entrada.csv";
	private String saida = "C:\\Senai 1°DES\\JavaWorkspace\\MVC_alunos\\Arquivos\\saida.csv";
	
	public ArrayList<Alunos> abrir(){
		ArrayList<Alunos> linhas = new ArrayList<>();
		Alunos a;
		try {
			br = new BufferedReader(new FileReader(entrada));
			String linha = br.readLine();
			while(linha != null) {
				a = new Alunos(linha);
				linhas.add(a);
				linha = br.readLine();
			}
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		return linhas;
	}
	
	public void salvar(ArrayList<Alunos> linhas) {
			try {
				bw = new BufferedWriter(new FileWriter(saida));
				for (Alunos a : linhas) {
					bw.write(a.media()+"\r\n");
				}
				bw.close();
			}catch (Exception e) {
				System.out.println(e.toString());
			}
	}
}
