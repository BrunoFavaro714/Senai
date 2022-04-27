package model;

public class Login {

	private String v1;
	private String v2;
	
	public Login(String entrada) {
		v1 = entrada.split(";")[0];
		v2 = entrada.split(";")[1];
	}
	

	public String getUser() {
		return v1;
	}

	public String getSenha() {
		return v2;
	}
}
