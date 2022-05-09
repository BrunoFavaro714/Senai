package controle;

import java.util.ArrayList;

import modelo.Pet;

public class PetProcess {

	public static ArrayList<Pet> pets = new ArrayList<>();
	private static PetDAO pd = new PetDAO();
	
	public static void abrir() {
		pets = pd.ler();
	}
	
	public static void salvar() {
		pd.escrever(pets);
	}
	
	public static void carregarTeste() {
		
		pets.add(new Pet(1,"Cachorro","Toto","Vira Lata",26,"20/10/2010","Alfredo","(19)99999-9999"));
		pets.add(new Pet(2,"Gato","Toga","Persa",7,"12/03/2016","Sinclar","(19)99999-9999"));
		pets.add(new Pet(3,"Coelho","Eio","...",5,"23/08/2019","Bethany","(19)99999-9999"));
		pets.add(new Pet(4,"Outro","Perry","...",12,"06/11/2018","Pherb","(19)99999-9999"));
	}
	
}
