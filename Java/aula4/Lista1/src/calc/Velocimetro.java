package calc;

import java.util.Scanner;

public class Velocimetro {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		float velo, dist, horas, minutos, resto;
		
		System.out.print("Insira a velocidade: ");
		velo = entrada.nextFloat();
		System.out.print("Insira a distancia: ");
		dist = entrada.nextFloat();
		
		resto = (dist % velo) / 100;
		horas = (dist / velo) - resto;
		
		minutos = resto * velo;
		
		System.out.printf("Vai demorar %.0f horas e %.0f minutos", horas, minutos);
	}
}
