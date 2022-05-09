package main;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

public class Arquivo {

	public void in(int numb) {
		try {
			FileWriter fw = new FileWriter("rand.txt", true);
			BufferedWriter bw = new BufferedWriter(fw);
			
			bw.write(numb+"\r\n");
			
			bw.close();
			fw.close();
		} catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	public ArrayList<Integer> out() {
		ArrayList<Integer> list = new ArrayList<>();
		
		try {
			FileReader fr = new FileReader("rand.txt");
			BufferedReader br = new BufferedReader(fr);
			
			int item;
			String line = "";
			while((line = br.readLine()) != null) {
				item = br.read();
				list.add(item);
			}
			br.close();
			fr.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		return list;
	}
}
