package calc;


import java.util.Scanner;

public class Avião {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int velo, dist, horas;
		
		System.out.print("Insira uma distancia superior a 900km: ");
		dist = entrada.nextInt();
		velo = 900;
		
		horas = (dist / velo);
		
		if (dist >= 900) {
			System.out.printf("Vai demorar %d horas ", horas);
		} else {
			System.out.println("Vai demorar menos de 1 hora");
		}
	}
}
