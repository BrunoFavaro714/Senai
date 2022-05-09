package agenda;

public class Contato {

	public int id;
	public String name;
	public int age;
	public String number;
	
	Contato(){}
	
	Contato(int id, String name, int age, String number){
		this.id = id;
		this.name = name;
		this.age =age;
		this.number = number;
	}
	
	public String tabing() {
		
		return "ID. "+id+"\tNome. "+name+"\tIdade. "+age+"\tTelefone. "+number+"\n";
	}
}
