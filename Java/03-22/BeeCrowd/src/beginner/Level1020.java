package beginner;

import java.util.Scanner;

public class Level1020 {

	public static void main(String[] arg) {
		Scanner input = new Scanner(System.in);
		int dias = input.nextInt();
		int anos = dias/365;
		int mes = (dias%365)/30;
		int days = ((dias%365)%30);
		
		System.out.println(anos +" ano(s)");
		System.out.println(mes +" mes(es)");
		System.out.println(days +" dia(s)");
	}
}
