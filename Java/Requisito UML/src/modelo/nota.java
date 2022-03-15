package modelo;

public class Nota {

	public String componente;
	public int a;
	public int b;
	public int c;
	public float media;
	
	public Nota(String componente, int a, int b, int c) {
		int cont=0;
		this.componente = componente;
		this.a = a;
		this.b = b;
		this.c = c;
		if(a != -1) {
			cont++;
		}else {
			a++;
		}
		if(b != -1) {
			cont++;
		}else {
			b++;
		}
		if(c != -1) {
			cont++;
		}else {
			c++;
		}
		this.media = (a+b+c)/cont;
	}
	
}
