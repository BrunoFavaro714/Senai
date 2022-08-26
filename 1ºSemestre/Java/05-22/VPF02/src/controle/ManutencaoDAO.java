package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Manutencao;

public class ManutencaoDAO {

	private Manutencao manutencao;
	private ArrayList<Manutencao> manutencoes = new ArrayList<>();
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "./Dados/manutencao.csv";
	
	public ArrayList<Manutencao> ler(){
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = br.readLine();
			while(linha != null) {
				manutencao = new Manutencao(linha);
				manutencoes.add(manutencao);
				linha = br.readLine();
			}
			br.close();
		}catch(FileNotFoundException e) {
			System.out.println(e);
		}catch(IOException e) {
			System.out.println(e);
		}
		
		return manutencoes;
	}
	public void escrever(ArrayList<Manutencao> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo));
			for (Manutencao m : linhas) {
				bw.write(m.toCSV());
			}
			bw.close();
		}catch(IOException e) {
			System.out.println(e);
		}
	}
	
}
