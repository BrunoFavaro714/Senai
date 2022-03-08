package matriz2;

public class Database {

	public int size = 10;
	public int id;
	public String name;
	public String surname;
	public int age;
	public int media;
	
	Database(){}
	
	Database(int id, String name,  String surname, int age, int media){
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.age =age;
		this.media = media;
	}
	
	public String output() {
		
	
	return "ID. " + id + "\tNome. "+name+"\tSobrenome. "+surname+"\tIdade. "+age;
	}
	public String outputMedia() {
		
		
		return "ID. " + id + "\tNome. "+name+"\tSobrenome. "+surname+"\tMedia."+media;
		}
}
