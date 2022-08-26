package view;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Currency;
import java.util.Locale;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import control.RoomProcess;
import model.Room;

public class Screen extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	
	private JPanel painel;
	private JLabel andar, quarto, nomeCompleto, telefone, dataEntrada, dataSaida, vPerNoite; 
	private JTextField tfNomeCompleto, tfTelefone, tfDataEntrada, tfDataSaida, tfVPerNoite;
	private JTable listaQuartos;
	private DefaultTableModel tableModel;
	private JScrollPane scroll;
	private JComboBox<String> tfAndar, quartos; 
	private JButton adicionar, alterar, excluir, buscar;
	
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	Screen(){
		setTitle("Letoh");
		setBounds(650, 200, 650, 625);
		painel = new JPanel();
		painel.setBackground(new Color(197,197,197));
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);
		
		textField();
		tabela();
		button();
	}
	
	private void textField() {
		
		andar = new JLabel("Andar:");
		andar.setBounds(20, 20, 100, 30);
		painel.add(andar);
		tfAndar = new JComboBox<String>(new String[] {"1", "2", "3", "4", "5"});
		tfAndar.setBounds(120, 20, 150, 30);
		painel.add(tfAndar);
		
		
		quarto = new JLabel("Quarto:");
		quarto.setBounds(20, 60, 100, 30);
		painel.add(quarto);
		quartos = new JComboBox<String>(new String[] {"101", "102", "103", "104"});
		quartos.setBounds(120, 60, 150, 30);
		quartos.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(quartos);
		
		
		nomeCompleto = new JLabel("Nome Completo:");
		nomeCompleto.setBounds(20, 100, 100, 30);
		painel.add(nomeCompleto);
		tfNomeCompleto = new JTextField();
		tfNomeCompleto.setBounds(120, 100, 150, 30);
		tfNomeCompleto.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfNomeCompleto);
		
		telefone = new JLabel("Telefone:");
		telefone.setBounds(20, 140, 100, 30);
		painel.add(telefone);
		tfTelefone = new JTextField();
		tfTelefone.setBounds(120, 140, 150, 30);
		tfTelefone.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfTelefone);
		
		dataEntrada = new JLabel("Data de Entrada:");
		dataEntrada.setBounds(20, 180, 100, 30);
		painel.add(dataEntrada);
		tfDataEntrada = new JTextField();
		tfDataEntrada.setBounds(120, 180, 150, 30);
		tfDataEntrada.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfDataEntrada);
		
		dataSaida = new JLabel("Data de Saida:");
		dataSaida.setBounds(20, 220, 100, 30);
		painel.add(dataSaida);
		tfDataSaida = new JTextField();
		tfDataSaida.setBounds(120, 220, 150, 30);
		tfDataSaida.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfDataSaida);
		
		vPerNoite = new JLabel("Valor Pernoite:");
		vPerNoite.setBounds(20, 260, 100, 30);
		painel.add(vPerNoite);
		tfVPerNoite = new JTextField();
		tfVPerNoite.setBounds(120, 260, 150, 30);
		tfVPerNoite.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(tfVPerNoite);
		
		tfAndar.addActionListener(this);
	}
	private void tabela() {
		listaQuartos = new JTable();
		tableModel = new DefaultTableModel();
		tableModel.addColumn("Quarto");
		tableModel.addColumn("Nome");
		tableModel.addColumn("Telefone");
		tableModel.addColumn("Data de Entrada");
		tableModel.addColumn("Data de Saida");
		tableModel.addColumn("Valor da Pernoite");
		tableModel.addColumn("Valor Total");
		if(RoomProcess.rooms.size() != 0) {
			preencherTabela();
		}
		listaQuartos = new JTable(tableModel);
		listaQuartos.setEnabled(false);
		scroll = new JScrollPane(listaQuartos);
		scroll.setBounds(20, 300, 595, 270);
		scroll.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(scroll);
		
	}
	private void button() {
		adicionar = new JButton("Adicionar Reserva");
		adicionar.setBounds(400, 20, 200, 50);
		painel.add(adicionar);
		buscar = new JButton("Buscar Reserva");
		buscar.setBounds(400, 90, 200, 50);
		buscar.setEnabled(true);
		painel.add(buscar);
		alterar = new JButton("Alterar Reserva");
		alterar.setBounds(400, 160, 200, 50);
		alterar.setEnabled(false);
		painel.add(alterar);
		excluir = new JButton("Cancelar Reserva");
		excluir.setBounds(400, 230, 200, 50);
		excluir.setEnabled(false);
		painel.add(excluir);
		
		
		adicionar.addActionListener(this);
		buscar.addActionListener(this);
		alterar.addActionListener(this);
		excluir.addActionListener(this);
	}
	
	private int obterAndar(int quarto) {
		
		if(quarto > 500) {
			return 4;
		}else if(quarto > 400) {
			return 3;
		}else if(quarto > 300) {
			return 2;
		}else if(quarto > 200) {
			return 1;
		}else {
			return 0;
		}
	}
	
	private void alterarAndar(int andarAtual) {
		String[] quarto = new String[] {String.format("%d",andarAtual*100+1), String.format("%d",andarAtual*100+2), String.format("%d",andarAtual*100+3), String.format("%d",andarAtual*100+4)};
		quartos.removeAllItems();
		for (String q : quarto) {
			quartos.insertItemAt(q, quartos.getItemCount());
		}
		quartos.setSelectedIndex(0);
		
		painel.add(quartos);
	}
	
	private void adicionar(){
		if(tfNomeCompleto.getText().length() != 0 && tfTelefone.getText().length() != 0 && tfDataEntrada.getText().length() != 0 && tfDataSaida.getText().length() != 0 
				&& tfVPerNoite.getText().length() != 0) {
			
			df.setCurrency(Currency.getInstance(BRASIL));
			String entrada, saida;
			float perNoite;
			try {
				entrada = sdf.format(sdf.parse(tfDataEntrada.getText()));
				saida = sdf.format(sdf.parse(tfDataSaida.getText()));
				perNoite = Float.parseFloat(df.parse(tfVPerNoite.getText()).toString());
			}catch(ParseException e) {
				System.out.println(e);
				perNoite = 0;
				entrada = null;
				saida = null;
			}
			
			RoomProcess.rooms.add(new Room(quartos.getSelectedItem().toString(), tfNomeCompleto.getText(), tfTelefone.getText(), entrada, saida, String.format("%.2f", perNoite)));
			
			
			preencherTabela();
			limparCampos();
			RoomProcess.salvar();
		}else {
			JOptionPane.showMessageDialog(this, "Favor Preencher Todos os Campos");
		}
	}
	
	private void buscar() {
		String entrada = JOptionPane.showInputDialog(this, "Digite o Nome do Cliente");
		
		if(entrada != null) {
			for(int i = 0; i < RoomProcess.rooms.size(); i++) {
				if((RoomProcess.rooms.get(i).getNomeCompleto()).contains(entrada)){
					tfAndar.setSelectedIndex(obterAndar(RoomProcess.rooms.get(i).getQuarto()));
					quartos.setSelectedIndex(obterAndar(RoomProcess.rooms.get(i).getQuarto()));
					tfNomeCompleto.setText(RoomProcess.rooms.get(i).getNomeCompleto());
					tfTelefone.setText(RoomProcess.rooms.get(i).getTelefone());
					tfDataEntrada.setText(RoomProcess.rooms.get(i).getEntrada("s"));
					tfDataSaida.setText(RoomProcess.rooms.get(i).getSaida("s"));
					tfVPerNoite.setText(RoomProcess.rooms.get(i).getPerNoite("s"));
					
					tfNomeCompleto.setEditable(false);
					adicionar.setEnabled(false);
					alterar.setEnabled(true);
					excluir.setEnabled(true);
					RoomProcess.salvar();
					break;
				}
			}
		}
	}
	
	private void alterar() {
		String cliente = tfNomeCompleto.getText();
		int j = 0;
		for(int i = 0; i < RoomProcess.rooms.size(); i++) {
			if((RoomProcess.rooms.get(i).getNomeCompleto()).contains(cliente)){
				j = i;
				break;
			}
		}
		if(tfNomeCompleto.getText().length() != 0 && tfTelefone.getText().length() != 0 && tfDataEntrada.getText().length() != 0 && tfDataSaida.getText().length() != 0 
				&& tfVPerNoite.getText().length() != 0) {
			
			if(RoomProcess.rooms.get(j).getQuarto("s").equals(quartos.getSelectedItem()) && RoomProcess.rooms.get(j).getTelefone().equals(tfTelefone.getText()) && RoomProcess.rooms.get(j).getEntrada("s").equals(tfDataEntrada.getText()) && RoomProcess.rooms.get(j).getSaida("s").equals(tfDataSaida.getText()) && RoomProcess.rooms.get(j).getPerNoite("s").equals(tfVPerNoite.getText())) {
				String entrada = JOptionPane.showInputDialog(this, "Insira o Nome do Cliente");
				if(entrada != null || entrada != "") {
					RoomProcess.rooms.set(j, new Room(quartos.getSelectedItem().toString(), tfNomeCompleto.getText(), tfTelefone.getText(), tfDataEntrada.getText(), tfDataSaida.getText(), tfVPerNoite.getText()));
				}
			}else {
				
				RoomProcess.rooms.set(j, new Room(quartos.getSelectedItem().toString(), tfNomeCompleto.getText(), tfTelefone.getText(), tfDataEntrada.getText(), tfDataSaida.getText(), tfVPerNoite.getText()));
			}
			preencherTabela();
			limparCampos();
			RoomProcess.salvar();
		}else {
			JOptionPane.showMessageDialog(this, "Favor Preencher Todos os Campos");
		}
			
		adicionar.setEnabled(true);
		alterar.setEnabled(false);
		excluir.setEnabled(false);
		RoomProcess.salvar();
		
	}
	
	private void excluir() {
		String cliente = tfNomeCompleto.getText();
		int j = 0;
		for(int i = 0; i < RoomProcess.rooms.size(); i++) {
			if((RoomProcess.rooms.get(i).getNomeCompleto()).contains(cliente)){
				RoomProcess.rooms.remove(i);
			}
		}
		preencherTabela();
		limparCampos();
		
		adicionar.setEnabled(true);
		alterar.setEnabled(false);
		excluir.setEnabled(false);
		RoomProcess.salvar();
	}

	private void limparCampos() {
		tfNomeCompleto.setText(null);
		tfTelefone.setText(null);
		tfDataEntrada.setText(null);
		tfDataSaida.setText(null);
		tfVPerNoite.setText(null);
	}

	private void preencherTabela() {
		int totLinhas = tableModel.getRowCount();
		if (tableModel.getRowCount() > 0) {
			for (int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Room r : RoomProcess.rooms) {
			tableModel.addRow(new String[] { r.getQuarto("s"), r.getNomeCompleto(), r.getTelefone(), r.getEntrada("s"), r.getSaida("s"), r.getPerNoite("s"), r.valorTotal()} );
		}
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource() == tfAndar) {
			alterarAndar(Integer.parseInt(tfAndar.getSelectedItem().toString()));
		}
		if(e.getSource() == adicionar) {
			adicionar();
		}
		if(e.getSource() == buscar) {
			buscar();
		}
		if(e.getSource() == alterar) {
			alterar();
		}
		if(e.getSource() == excluir) {
			excluir();
		}
		
	}
	
	public static void main(String[] args) {
		RoomProcess.abrir();
		new Screen().setVisible(true);
	}
}
