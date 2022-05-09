package beginner;

import java.util.Scanner;

public class Level1019 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int sec = input.nextInt();
		int hora = sec/3600;
		int restoHora = sec%3600;
		int min = restoHora/60;
		int second = restoHora%60;
		System.out.println(hora+":"+min+":"+second);
	}
}
