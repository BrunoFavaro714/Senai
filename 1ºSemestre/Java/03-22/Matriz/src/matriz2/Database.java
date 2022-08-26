package matriz2;

public class Database {

	public int id;
	public String name;
	public String surname;
	public int age;
	public int media;
	public String aprov;
	
	Database(){}
	
	Database(int id, String name,  String surname, int age, int media, String aprov){
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.age =age;
		this.media = media;
		this.aprov = aprov;
	}
	
	public String output() {
		
	
	return "ID. " + id + "\tNome. "+name+"\tSobrenome. "+surname+"\tIdade. "+age;
	}
	public String outputMedia() {
		
		
		return "ID. " + id + "\tNome. "+name+" "+surname+"\tMedia.";
		}
}
