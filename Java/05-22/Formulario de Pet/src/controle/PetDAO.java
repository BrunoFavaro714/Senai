package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Pet;

public class PetDAO {

	private BufferedReader br;
	private BufferedWriter bw;
	private String path = "./Arquivos/Pets.csv";
	
	public ArrayList<Pet> ler() {
		ArrayList<Pet> linhas = new ArrayList<>();
		Pet p;
		
		try {
			br = new BufferedReader(new FileReader(path));
			String linha = br.readLine();
			while(linha != null) {
				p = new Pet(linha);
				linhas.add(p);
				linha = br.readLine();
			}
			br.close();
		}catch(IOException e) {
			System.out.println(e);
		}
		
		return linhas;
	}
	
	public void escrever(ArrayList<Pet> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(path));
			for (Pet p : linhas) {
				bw.write(p.toCSV());
			}
			bw.close();
		}catch(IOException e) {
			System.out.println(e);
		}
	}
}
