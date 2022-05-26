package control;

import java.util.ArrayList;

import model.Room;

public class RoomProcess {

	public static ArrayList<Room> rooms = new ArrayList<>();
	private static RoomDAO rd = new RoomDAO();
	
	public static void abrir() {
		rooms = rd.ler();
	}
	
	public static void salvar() {
		rd.escrever(rooms);
	}
	
}
