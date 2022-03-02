package agenda;

public class Agenda02 {

	public static void main(String[] args) {
		Contato c1 = new Contato();
		c1.id = 30;
		c1.name = "Roberto";
		c1.age = 19;
		
		System.out.println(c1.id+"\t"+c1.name+"\t"+c1.age);
		
		c1 = new Contato();
		System.out.println(c1.id+"\t"+c1.name+"\t"+c1.age);
		
		c1.id = 3;
		c1.name = "Robeo";
		c1.age = 34;
		
		System.out.println(c1.id+"\t"+c1.name+"\t"+c1.age);
	}

}
