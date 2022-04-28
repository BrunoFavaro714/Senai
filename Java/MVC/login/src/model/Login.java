package model;

public class Login {

	private String usuario;
	private String senha;
	
	public Login(String usuario, String senha) {
		this.usuario = usuario;
		this.senha = senha;
	}
	public Login(String entrada) {
		this.usuario = entrada.split(";")[0];
		this.senha = entrada.split(";")[1];
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	
}
