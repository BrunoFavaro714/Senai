package control;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import model.Room;

public class RoomDAO {

	private BufferedReader br;
	private BufferedWriter bw;
	private String path = "./Data/room.csv";
	
	public ArrayList<Room> ler(){
		ArrayList<Room> linhas = new ArrayList<>();
		Room r;
		try {
			br = new BufferedReader(new FileReader(path));
			String linha = br.readLine();
			while(linha != null) {
				r = new Room(linha);
				linhas.add(r);
				linha = br.readLine();
			}
			br.close();
		}catch(IOException e) {
			System.out.println(e);
		}
		
		return linhas;
	}
	
	public void escrever(ArrayList<Room> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(path));
			for (Room r : linhas) {
				bw.write(r.toCSV());
			}
			bw.close();
		}catch(IOException e) {
			System.out.println(e);
		}
	}
	
}
