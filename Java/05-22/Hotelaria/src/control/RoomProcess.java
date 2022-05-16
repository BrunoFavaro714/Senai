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
	
	
	public static void carregarTeste() {
		rooms = new ArrayList<>();
		
		rooms.add(new Room("101", "Carlos Eduardo", "(19)99999-9999", "06/05/2022", "09/05/2022", "230.00"));
		rooms.add(new Room("302", "Patricia Marcia", "(19)99999-9999", "14/04/2022", "16/04/2022", "130.70"));
		rooms.add(new Room("501", "Andre Teixeira", "(19)99999-9999", "06/05/2022", "07/05/2022", "250.00"));
	}
}
