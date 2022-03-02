package agenda;

public class Agenda03 {

	public static void main(String[] args) {
		Contato c1 = new Contato();
		c1.id = 30;
		c1.name = "Roberto";
		c1.age = 19;
		c1.number = "(19)99999-9999";
		
		Contato c2 = new Contato();
		c2.id = 3;
		c2.name = "Robeo";
		c2.age = 34;
		c2.number = "(19)98888-8888";
		
		System.out.println(c1.id+"\t"+c1.name+"\t"+c1.age+"\t"+c1.number);
		System.out.println(c2.id+"\t"+c2.name+"\t"+c2.age+"\t"+c2.number);
		
	}

}
