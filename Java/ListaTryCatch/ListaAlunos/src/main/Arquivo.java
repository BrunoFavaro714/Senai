package main;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

public class Arquivo {

	public void in(String aluno) {
		try {
			FileWriter fw = new FileWriter("Alunos.txt", true);
			BufferedWriter bw = new BufferedWriter(fw);
			
			bw.write(aluno);
			
			bw.close();
			fw.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	public ArrayList<String> out(){
		ArrayList<String> alunos = new ArrayList<>();
		
		try {
			FileReader fr = new FileReader("Alunos.txt");
			BufferedReader br = new BufferedReader(fr);
			
			String linha = "";
			while((linha = br.readLine()) != null) {
				alunos.add(linha);
			}
				
			br.close();
			fr.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		
		return null;
	}
}
