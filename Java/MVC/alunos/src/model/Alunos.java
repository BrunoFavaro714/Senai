package model;

public class Alunos {

	private String v1;
	private float v2;
	private float v3;
	private float v4;
	
	public Alunos(String entrada) {
		v1 = entrada.split(";")[0];
		v2 = Float.parseFloat(entrada.split(";")[1]);
		v3 = Float.parseFloat(entrada.split(";")[2]);
		v4 = Float.parseFloat(entrada.split(";")[3]);
	}
	public String media() {
		float media = (v2 + v3 + v4) / 3;
		return v1 + " " + String.format("%.2f", media);
	}
}
