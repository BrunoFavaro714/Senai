package view;

import control.RoomProcess;
import model.Room;

public class TexteConsole {

	public static void main(String[] args) {
		RoomProcess.carregarTeste();
		for(Room r : RoomProcess.rooms) {
			System.out.println(r.toString());
		}
	}
}
