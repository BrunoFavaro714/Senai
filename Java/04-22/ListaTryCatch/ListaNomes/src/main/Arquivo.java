package main;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

public class Arquivo {

	public void writer(String info) {
		try {
			FileWriter fw = new FileWriter("Lista1.txt", true);
			BufferedWriter bw = new BufferedWriter(fw);
			
			bw.write(info+"\r\n");
			
			bw.close();
			fw.close();
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	public ArrayList<String> ler(){
		ArrayList<String> file = new ArrayList<>();
		try {
			FileReader fr = new FileReader("Lista1.txt");
			BufferedReader br = new BufferedReader(fr);
			
			String linha = "";
			
			while((linha = br.readLine()) != null) {
				file.add(linha);
			}
			
			br.close();
			fr.close();
		}catch(Exception e){
			System.out.println(e.toString());
		}
		return file;
	}
}
