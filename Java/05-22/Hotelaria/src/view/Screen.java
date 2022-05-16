package view;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Currency;
import java.util.Locale;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

import control.RoomProcess;
import model.Room;

public class Screen extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	
	private JPanel painel;
	private JLabel quarto, nomeCompleto, telefone, dataEntrada, dataSaida, vPerNoite; 
	private JTextField tfNomeCompleto, tfTelefone, tfDataEntrada, tfDataSaida, tfVPerNoite;
	private JTextArea listaQuartos;
	private JComboBox<String> quartos, filtrar; 
	private JButton adicionar, alterar, excluir;
	
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	
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
		listaQuartos.setBounds(20, 300, 495, 270);
		listaQuartos.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(listaQuartos);
		filtrar = new JComboBox<String>(new String[] {"Sem Filtro" ,"Ocupados", "Livres"});
		filtrar.setBounds(20, 270, 495, 30);
		quartos.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(filtrar);
	}
	private void button() {
		adicionar = new JButton("Adicionar Reserva");
		adicionar.setBounds(300, 20, 200, 50);
		painel.add(adicionar);
		alterar = new JButton("Alterar Reserva");
		alterar.setBounds(300, 90, 200, 50);
		alterar.setEnabled(false);
		painel.add(alterar);
		excluir = new JButton("Cancelar Reserva");
		excluir.setBounds(300, 160, 200, 50);
		excluir.setEnabled(false);
		painel.add(excluir);
	}
	
	
	private void adicionar(){
		if(tfNomeCompleto.getText().length() != 0 && tfTelefone.getText().length() != 0 && tfDataEntrada.getText().length() != 0 && tfDataSaida.getText().length() != 0 
				&& tfVPerNoite.getText().length() != 0) {
			
			df.setCurrency(Currency.getInstance(BRASIL));
			float vPerNoite;
			try {
				vPerNoite = Float.parseFloat(df.parse(tfVPerNoite.getText()).toString());
			} catch(ParseException e) {
				System.out.println(e);
				vPerNoite = 0;
			}
			
			RoomProcess.rooms.add(new Room(quartos.getSelectedItem().toString(), tfNomeCompleto.getText(), tfTelefone.getText(), tfDataEntrada.getText(), tfDataSaida.getText(), tfVPerNoite.getText()));
			
			preencherAreaDeTexto();
			limparCampos();
		}else {
			JOptionPane.showMessageDialog(this, "Favor Preencher Todos os Campos");
		}
	}
	private void alterar() {
		int quarto = Integer.parseInt(quartos.getSelectedItem().toString());
		Room room = new Room(quarto);
		int indice = RoomProcess.rooms.indexOf(room);
		if(tfNomeCompleto.getText().length() != 0 && tfTelefone.getText().length() != 0 && tfDataEntrada.getText().length() != 0 && tfDataSaida.getText().length() != 0 
				&& tfVPerNoite.getText().length() != 0) {
			
			df.setCurrency(Currency.getInstance(BRASIL));
			float vPerNoite;
			try {
				vPerNoite = Float.parseFloat(df.parse(tfVPerNoite.getText()).toString()); 
			}catch(ParseException e) {
				System.out.println(e);
				vPerNoite = 0;
			}
			
			RoomProcess.rooms.set(indice, new Room(quartos.getSelectedItem().toString(), tfNomeCompleto.getText(), tfTelefone.getText(), tfDataEntrada.getText(), tfDataSaida.getText(), tfVPerNoite.getText()));
			
			preencherAreaDeTexto();
			limparCampos();
		}else {
			JOptionPane.showMessageDialog(this, "Favor Preencher Todos os Campos");
		}
			
		adicionar.setEnabled(true);
		alterar.setEnabled(false);
		excluir.setEnabled(true);
		RoomProcess.salvar();
	}
	
	private void excluir() {
		int quarto = Integer.parseInt(quartos.getSelectedItem().toString());
		Room room = new Room(quarto);
		int indice = RoomProcess.rooms.indexOf(room);
		
	}

	private void limparCampos() {
		tfNomeCompleto.setText(null);
		tfTelefone.setText(null);
		tfDataEntrada.setText(null);
		tfDataSaida.setText(null);
		tfVPerNoite.setText(null);
	}

	private void preencherAreaDeTexto() {
		String texto = "";
		for (Room r: RoomProcess.rooms) {
				texto += r.toString();
		}
		listaQuartos.setText(texto);
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource() == quartos) {
			
		}
		if(e.getSource() == filtrar) {
			
		}
		if(e.getSource() == adicionar) {
			adicionar();
		}
		if(e.getSource() == alterar) {
			alterar();
		}
		if(e.getSource() == excluir) {
			excluir();
		}
		
	}
	
	public static void main(String[] args) {
		
		
		new Screen().setVisible(true);
	}
}
