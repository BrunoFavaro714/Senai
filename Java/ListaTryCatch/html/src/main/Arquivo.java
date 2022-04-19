package main;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

public class Arquivo {

	public void in(String line) {
		try {
			FileWriter fw = new FileWriter("index.html", true);
			BufferedWriter bw = new BufferedWriter(fw);
			
			bw.write(line+"\r\n");
			
			bw.close();
			fw.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	public void css(String line) {
		try {
			FileWriter fw = new FileWriter("style.css", true);
			BufferedWriter bw = new BufferedWriter(fw);
			
			bw.write(line+"\r\n");
			
			bw.close();
			fw.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	public ArrayList<String> out(){
		ArrayList<String> html = new ArrayList<>();
		
		try {
			FileReader fr = new FileReader("index.html");
			BufferedReader br = new BufferedReader(fr);
			
			String line = "";
			while((line = br.readLine()) != null) {
				html.add(line);
			}
			
			br.close();
			fr.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		return html;
	}
}
