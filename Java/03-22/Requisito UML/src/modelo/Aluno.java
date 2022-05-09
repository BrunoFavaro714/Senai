package modelo;

import java.text.SimpleDateFormat;
import java.util.Date;
	

public class Aluno {

	public SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	public int id;
	public String nome;
	public String sobrenome;
	public Date dataNas;
	public Nota[] notas = new Nota[4];
	public int idade;
	public int ap;
	public boolean conceito;
	
	@SuppressWarnings("deprecation")
	public int CalcIdade() {
		
		Date hoje = new Date();
		idade = hoje.getYear() - dataNas.getYear();
		int mes = hoje.getMonth() - dataNas.getMonth();
		if(mes < 1) {
			idade--;
		}
		return idade;
	}
	public String obterConceito() {
		conceito = true;
		for(int i = 0; i < 4; i++) {
			if(notas[i].media < 50) {
				conceito = false;
				break;
			}
		}
		String aprov;
		if(conceito) {
			aprov = "Aprovado!";
		}else {
			aprov = "Reprovado!";
		}
	return aprov;
	}
	public String apresenta() {
		String var0 =  notas[0].componente + " " + notas[0].a + " " + notas[0].b + " " + notas[0].c + " " + notas[0].media ;
		String var1 = notas[1].componente + " " + notas[1].a + " " + notas[1].b + " " + notas[1].c + " " + notas[1].media ;
		String var2 = notas[2].componente + " " + notas[2].a + " " + notas[2].b + " " + notas[2].c + " " + notas[2].media ;
		String var3 = notas[3].componente + " " + notas[3].a + " " + notas[3].b + " " + notas[3].c + " " + notas[3].media ;
		return var0 + "\n" + var1 + "\n" + var2 + "\n" + var3;
	}
	public String formatAluno() {
	return id + " " + nome + " " +  sobrenome + " " + CalcIdade();
	}
	public Aluno(int id, String nome, String sobrenome, Date dataNas) {
		this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.dataNas = dataNas;
	}	
	public String formatLista() {
		
		return id + " " + nome + " " +  sobrenome + " " + CalcIdade() + " " + df.format(dataNas) + "\n" + apresenta();
	}
	public String listaApRep() {
		
		return id + " " + nome + " " +  sobrenome + " " + CalcIdade() + " " + df.format(dataNas) + "\n" + apresenta() + "\n" + obterConceito();
	}
}
