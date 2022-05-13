package view;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.SimpleDateFormat;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class Screen extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	
	private JPanel painel;
	private JLabel quarto, nomeCompleto, telefone, dataEntrada, dataSaida, vPerNoite; 
	private JTextField tfNomeCompleto, tfTelefone, tfDataEntrada, tfDataSaida, tfVPerNoite;
	private JTextArea listaQuartos;
	private JComboBox<String> quartos, filtrar; 
	private JButton adicionar, alterar, excluir;
	
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	Screen(){
		setTitle("Letoh");
		setBounds(650, 200, 550, 625);
		painel = new JPanel();
		painel.setBackground(new Color(197,197,197));
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);
		
		textField();
		textArea();
		button();
	}
	
	private void textField() {
		quarto = new JLabel("Quarto:");
		quarto.setBounds(20, 20, 100, 30);
		painel.add(quarto);
		quartos = new JComboBox<String>(new String[] {"101", "102", "103", "104"});
		quartos.setBounds(120, 20, 120, 30);
		quartos.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(quartos);
		
		nomeCompleto = new JLabel("Nome Completo:");
		nomeCompleto.setBounds(20, 60, 100, 30);
		painel.add(nomeCompleto);
		tfNomeCompleto = new JTextField();
		tfNomeCompleto.setBounds(120, 60, 120, 30);
		tfNomeCompleto.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfNomeCompleto);
		
		telefone = new JLabel("Telefone:");
		telefone.setBounds(20, 100, 100, 30);
		painel.add(telefone);
		tfTelefone = new JTextField();
		tfTelefone.setBounds(120, 100, 120, 30);
		tfTelefone.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfTelefone);
		
		dataEntrada = new JLabel("Data de Entrada:");
		dataEntrada.setBounds(20, 140, 100, 30);
		painel.add(dataEntrada);
		tfDataEntrada = new JTextField();
		tfDataEntrada.setBounds(120, 140, 120, 30);
		tfDataEntrada.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfDataEntrada);
		
		dataSaida = new JLabel("Data de Saida:");
		dataSaida.setBounds(20, 180, 100, 30);
		painel.add(dataSaida);
		tfDataSaida = new JTextField();
		tfDataSaida.setBounds(120, 180, 120, 30);
		tfDataSaida.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfDataSaida);
		
		vPerNoite = new JLabel("Valor Pernoite:");
		vPerNoite.setBounds(20, 220, 100, 30);
		painel.add(vPerNoite);
		tfVPerNoite = new JTextField();
		tfVPerNoite.setBounds(120, 220, 120, 30);
		tfVPerNoite.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfVPerNoite);
	}
	private void textArea() {
		listaQuartos = new JTextArea();
		listaQuartos.setBounds(20, 270, 495, 300);
		listaQuartos.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(listaQuartos);
		
	}
	private void button() {
		adicionar = new JButton("Adicionar Reserva");
		adicionar.setBounds(300, 20, 200, 50);
		painel.add(adicionar);
		alterar = new JButton("Alterar Reserva");
		alterar.setBounds(300, 90, 200, 50);
		painel.add(alterar);
		excluir = new JButton("Cancelar Reserva");
		excluir.setBounds(300, 160, 200, 50);
		painel.add(excluir);
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		
	}
	
	public static void main(String[] args) {
		
		
		new Screen().setVisible(true);
	}
}
