package visao;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Currency;
import java.util.Locale;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import controle.ProcessaManutencao;
import modelo.Manutencao;

public class FormManutencao extends JDialog implements ActionListener{	
	private static final long serialVersionUID = 1L;
	
	private JPanel painel;
	private JLabel id, data, equipamento, custo, tempo;
	private JTextField tfId, tfData, tfEquipamento, tfCusto, tfTempo;
	private JButton cadastrar, alterar, buscar, excluir;
	private JTable lista;
	private DefaultTableModel tableModel;
	private JScrollPane scroll;
		
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	
	public FormManutencao(){
		setTitle("Manutenção");
		setBounds(600, 300, 650, 550);
		painel = new JPanel();
		painel.setBackground(new Color(197,197,197));
		setContentPane(painel);
		setLayout(null);
		
		id = new JLabel("ID: ");
		id.setBounds(20, 10, 100, 30);
		painel.add(id);
		tfId = new JTextField();
		tfId.setBounds(110, 10, 150, 30);
		painel.add(tfId);
		
		data = new JLabel("Data:");
		data.setBounds(20, 50, 100, 30);
		painel.add(data);
		tfData = new JTextField();
		tfData.setBounds(110, 50, 150, 30);
		painel.add(tfData);
		
		equipamento = new JLabel("Equipamento:");
		equipamento.setBounds(20, 90, 100, 30);
		painel.add(equipamento);
		tfEquipamento = new JTextField();
		tfEquipamento.setBounds(110, 90, 150, 30);
		painel.add(tfEquipamento);
		
		custo = new JLabel("Custo:");
		custo.setBounds(20, 130, 100, 30);
		painel.add(custo);
		tfCusto = new JTextField();
		tfCusto.setBounds(110, 130, 150, 30);
		painel.add(tfCusto);
		
		tempo = new JLabel("Tempo:");
		tempo.setBounds(20, 170, 100, 30);
		painel.add(tempo);
		tfTempo = new JTextField();
		tfTempo.setBounds(110, 170, 150, 30);
		painel.add(tfTempo);
		
		cadastrar = new JButton("Cadastrar");
		alterar = new JButton("Alterar");
		buscar = new JButton("Buscar");
		excluir = new JButton("Excluir");
		
		lista = new JTable();
		tableModel = new DefaultTableModel();
		tableModel.addColumn("ID");
		tableModel.addColumn("Data");
		tableModel.addColumn("Equipamento");
		tableModel.addColumn("Custo");
		tableModel.addColumn("Tempo Gasto");
		tableModel.addColumn("Total");
		if(ProcessaManutencao.manutencoes.size() != 0) {
			preencherTabela();
		}
		lista = new JTable(tableModel);
		lista.setEnabled(false);
		scroll = new JScrollPane(lista);
		scroll.setBounds(20, 210, 600, 280);
		painel.add(scroll);
		
		cadastrar.setBounds(350, 10, 200, 40);
		alterar.setBounds(350, 110, 200, 40);
		buscar.setBounds(350, 60, 200, 40);
		excluir.setBounds(350, 160, 200, 40);
		
		excluir.setEnabled(false);
		alterar.setEnabled(false);
		
		painel.add(cadastrar);
		painel.add(alterar);
		painel.add(buscar);
		painel.add(excluir);
	}
	private void preencherTabela() {
		int totLinhas = tableModel.getRowCount();
		if(tableModel.getRowCount() > 0) {
			for (int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Manutencao m : ProcessaManutencao.manutencoes) {
			tableModel.addRow(new String[] {m.getId("s"), m.getData(), m.getEquipamento(), m.getCustoHora("s"), m.getTempoGasto("s"), String.format("%.2f", m.getTotal())});
		}
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource() == cadastrar) {
			cadastrar();
		}
		if(e.getSource() == alterar) {
			alterar();
		}
		if(e.getSource() == buscar) {
			buscar();
		}
		if(e.getSource() == excluir) {
			excluir();
		}
	}
	
	private void limparCampos() {
		tfId.setText(null);
		tfData.setText(null);
		tfEquipamento.setText(null);
		tfCusto.setText(null);
		tfTempo.setText(null);
	}
	
	private void excluir() {
		int id = Integer.parseInt(tfId.getText());
		Manutencao manutencao = new Manutencao(id);
		int indice = ProcessaManutencao.manutencoes.indexOf(manutencao);
		ProcessaManutencao.manutencoes.remove(indice);
		
		preencherTabela();
		limparCampos();
		cadastrar.setEnabled(true);
		excluir.setEnabled(false);
		alterar.setEnabled(false);
	}
	private void buscar() {
		String entrada = JOptionPane.showInputDialog(this, "Digite o ID");
		
		boolean isNumeric = true;
		if(entrada != null && !entrada.equals("")) {
			for (int i = 0; i < entrada.length(); i++) {
				if(!Character.isDigit(entrada.charAt(i))) {
					isNumeric = false;
				}
			}
		}else {
			isNumeric = false;
		}
		
		if(isNumeric) {
			int id = Integer.parseInt(entrada);
			Manutencao manutencao = new Manutencao(id);
			if(ProcessaManutencao.manutencoes.contains(manutencao)) {
				int indice = ProcessaManutencao.manutencoes.indexOf(manutencao);
				tfId.setText(ProcessaManutencao.manutencoes.get(indice).getId("s"));
				tfData.setText(ProcessaManutencao.manutencoes.get(indice).getData());
				tfEquipamento.setText(ProcessaManutencao.manutencoes.get(indice).getEquipamento());
				tfCusto.setText(ProcessaManutencao.manutencoes.get(indice).getCustoHora("s"));
				tfTempo.setText(ProcessaManutencao.manutencoes.get(indice).getTempoGasto("s"));
				cadastrar.setEnabled(false);
				alterar.setEnabled(true);
				excluir.setEnabled(true);
				ProcessaManutencao.salvar();
			}else {
				JOptionPane.showMessageDialog(this, "Serviço não encontrado");
			}
		}
		
	}
	private void alterar() {
		
	}
	private void cadastrar() {
		if(tfId.getText().length() != 0 && tfData.getText().length() != 0 && tfEquipamento.getText().length() != 0 && tfCusto.getText().length() != 0 && tfTempo.getText().length() != 0) {
		
			df.setCurrency(Currency.getInstance(BRASIL));
			double custo = 0, tempo = 0;
			int id = 0;
			try {
				custo = Double.parseDouble(df.parse(tfCusto.getText()).toString());
				tempo = Double.parseDouble(df.parse(tfTempo.getText()).toString());
				id = Integer.parseInt(tfId.getText().toString());
			}catch(ParseException e) {
				System.out.println(e);
			}
			ProcessaManutencao.manutencoes.add(new Manutencao(id, tfData.getText(), tfEquipamento.getText(), custo, tempo));
			ProcessaManutencao.salvar();
			preencherTabela();
			limparCampos();
		}else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
	}
	public static void main(String[] args) {
		ProcessaManutencao.abrir();
		FormManutencao tela = new FormManutencao();
		tela.setVisible(true);
	}

}
