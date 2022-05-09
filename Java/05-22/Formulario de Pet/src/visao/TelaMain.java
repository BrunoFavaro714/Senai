package visao;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class TelaMain extends JFrame implements ActionListener{

	private static final long serialVersionUID = 1L;
	
	private JPanel painel;
	private JLabel especieL, idL, racaL, nomeL, pesoL, nascimentoL, donoL, telefoneL, rotulo1, imagem;
	private JTextField id, raca, nome, peso, nascimento, dono, telefone;
	private JComboBox<String> especie;
	private JButton cadastro, busca, alterar, excluir;
	private JTextArea lista;
	private String[] srcImage = {"C:\\Senai 1°DES\\JavaWorkspace\\Formulario de Pets\\Assets\\cachorro.png",
			"C:\\Senai 1°DES\\JavaWorkspace\\Formulario de Pets\\Assets\\gato.png",
			"C:\\Senai 1°DES\\JavaWorkspace\\Formulario de Pets\\Assets\\coelho.png",
			"C:\\Senai 1°DES\\JavaWorkspace\\Formulario de Pets\\Assets\\ornintorrinco.png"};
	private ImageIcon icon;
	
	TelaMain() {
		
		
		
		setTitle("Formulario de Pets");
		setBounds(400, 100, 800, 900);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		
		idL = new JLabel("ID:");
		idL.setBounds(20, 20, 200, 30);
		id = new JTextField();
		id.setEditable(false);
		id.setBounds(100, 20, 200, 30);
		
		especieL = new JLabel("Especie: ");
		especieL.setBounds(20, 60, 200, 30);
		especie = new JComboBox<String>(new String[] {"Cachorro", "Gato", "Coelho", "Outro"});
		especie.setBounds(100, 60, 200, 30);
		
		racaL = new JLabel("Raça: ");
		racaL.setBounds(20, 100, 200, 30);
		raca = new JTextField();
		raca.setBounds(100, 100, 200, 30);
		
		nomeL = new JLabel("Nome: ");
		nomeL.setBounds(20, 140, 200, 30);
		nome = new JTextField();
		nome.setBounds(100, 140, 200, 30);
		
		pesoL = new JLabel("Peso: ");
		pesoL.setBounds(20, 180, 200, 30);
		peso = new JTextField();
		peso.setBounds(100, 180, 200, 30);
		
		nascimentoL = new JLabel("Nascimento: ");
		nascimentoL.setBounds(20, 220, 200, 30);
		nascimento = new JTextField();
		nascimento.setBounds(100, 220, 200, 30);
		
		donoL = new JLabel("Dono: ");
		donoL.setBounds(20, 260, 200, 30);
		dono = new JTextField();
		dono.setBounds(100, 260, 200, 30);
		
		telefoneL = new JLabel("Telefone:");
		telefoneL.setBounds(20, 300, 200, 30);
		telefone = new JTextField();
		telefone.setBounds(100, 300, 200, 30);
		
		rotulo1 = new JLabel("ID    Especie    Raça    Peso    Idade    Dono    Telefone");
		rotulo1.setBounds(30, 430, 1000, 20);
		lista = new JTextArea();
		lista.setEditable(false);
		lista.setBounds(20, 450, 1140, 400);
		
		cadastro = new JButton("Cadastrar");
		cadastro.setBounds(325, 20, 200, 40);
		busca = new JButton("Buscar");
		busca.setBounds(325, 70, 200, 40);
		alterar = new JButton("Alterar");
		alterar.setBounds(575, 20, 200, 40);
		excluir = new JButton("Excluir");
		excluir.setBounds(575, 70, 200, 40);
		
		imagem = new JLabel();
		imagem.setBounds(400, 120, 300, 300);
		imagem.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		mostrarImagem(0);
		
		painel.add(idL);
		painel.add(id);
		painel.add(especieL);
		painel.add(especie);
		painel.add(racaL);
		painel.add(raca);
		painel.add(nomeL);
		painel.add(nome);
		painel.add(pesoL);
		painel.add(peso);
		painel.add(nascimentoL);
		painel.add(nascimento);
		painel.add(donoL);
		painel.add(dono);
		painel.add(telefoneL);
		painel.add(telefone);
		painel.add(rotulo1);
		painel.add(lista);
		painel.add(cadastro);
		painel.add(busca);
		painel.add(alterar);
		painel.add(excluir);
		painel.add(imagem);
		
		especie.addActionListener(this);
		cadastro.addActionListener(this);
		busca.addActionListener(this);
		alterar.addActionListener(this);
		excluir.addActionListener(this);
	}
	
	private void mostrarImagem(int indice) {
		icon = new ImageIcon(new ImageIcon(srcImage[indice]).getImage().getScaledInstance(300, 300, 100));
		imagem.setIcon(icon);
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == especie) {
			mostrarImagem(especie.getSelectedIndex());
		}
	}
	
		
	public static void main(String[] args) {
		
		TelaMain tela = new TelaMain();
		tela.setVisible(true);
	}

	
}
