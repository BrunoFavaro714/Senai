package calc;

import java.util.Scanner;

public class Log {

	public static void main(String[] args){
		Scanner entrada = new Scanner(System.in);
		
		int cami, alqu, viagens, resto;
		
		System.out.print("Insira o numero de Caminhoes: ");
		cami = 18 * entrada.nextInt();
		System.out.print("Insira o numero de Alqueires: ");
		alqu = 250 * entrada.nextInt();
		
		viagens = alqu  / cami;
		resto = alqu % cami;
		
		if (resto > 0) {
			System.out.println("serão nessessarias " + (viagens + 1) + " viagens");
		} else {
			System.out.println("serão nessessarias " + viagens + " viagens");
		}
				
		
		
	}

}