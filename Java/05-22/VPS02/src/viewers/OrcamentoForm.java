package viewers;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Currency;
import java.util.Locale;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import controllers.OrcamentoProcess;
import models.Orcamento;

public class OrcamentoForm extends JFrame implements ActionListener {

	private JPanel painel;
	private JLabel id, fornecedor, produto, descricao, preco;
	private JTextField tfId, tfFornecedor, tfProduto, tfDescricao, tfPreco;
	private JButton adicionar, alterar, excluir, buscar;
	private JTable tabelaOrcamentos;
	private DefaultTableModel tableModel;
	private JScrollPane scroll;
	
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	
	OrcamentoForm(){
		setTitle("Orçamento");
		setBounds(650, 200, 650,625);
		painel = new JPanel();
		painel.setBackground(new Color(197, 122, 122));
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);
		
		textField();
		buttons();
		tabela();
	}
	
	private void textField(){
		id = new JLabel("ID:");
		id.setBounds(20, 20, 120, 30);
		painel.add(id);
		tfId = new JTextField();
		tfId.setBounds(140, 20, 175, 30);
		painel.add(tfId);
		
		fornecedor = new JLabel("Fornecedor:");
		fornecedor.setBounds(20, 60, 120, 30);
		painel.add(fornecedor);
		tfFornecedor = new JTextField();
		tfFornecedor.setBounds(140, 60, 175, 30);
		painel.add(tfFornecedor);
		
		produto = new JLabel("Tipo do Produto:");
		produto.setBounds(20, 100, 120, 30);
		painel.add(produto);
		tfProduto = new JTextField();
		tfProduto.setBounds(140, 100, 175, 30);
		painel.add(tfProduto);
		
		descricao = new JLabel("Nome do Produto:");
		descricao.setBounds(20, 140, 120, 30);
		painel.add(descricao);
		tfDescricao = new JTextField();
		tfDescricao.setBounds(140, 140, 175, 30);
		painel.add(tfDescricao);
		
		preco = new JLabel("Preço:");
		preco.setBounds(20, 180, 120, 30);
		painel.add(preco);
		tfPreco = new JTextField();
		tfPreco.setBounds(140, 180, 175, 30);
		painel.add(tfPreco);
	}
	private void buttons() {
		adicionar = new JButton("Adicionar Produto");
		adicionar.setBounds(400, 20, 200, 40);
		painel.add(adicionar);
		buscar = new JButton("Buscar Produto");
		buscar.setBounds(400, 70, 200, 40);
		buscar.setEnabled(true);
		painel.add(buscar);
		alterar = new JButton("Alterar Produto");
		alterar.setBounds(400, 120, 200, 40);
		alterar.setEnabled(false);
		painel.add(alterar);
		excluir = new JButton("Retirar Produto");
		excluir.setBounds(400, 170, 200, 40);
		excluir.setEnabled(false);
		painel.add(excluir);
		
		
		adicionar.addActionListener(this);
		buscar.addActionListener(this);
		alterar.addActionListener(this);
		excluir.addActionListener(this);
	}
	private void tabela() {
		tabelaOrcamentos = new JTable();
		tableModel = new DefaultTableModel();
		tableModel.addColumn("ID");
		tableModel.addColumn("Fornecedor");
		tableModel.addColumn("Tipo Produto");
		tableModel.addColumn("Nome Produto");
		tableModel.addColumn("Preco");
		tableModel.addColumn("Comprar");
		if(OrcamentoProcess.orcamentos.size() != 0) {
			preencherTabela();
		}
		tabelaOrcamentos = new JTable(tableModel);
		tabelaOrcamentos.setEnabled(false);
		scroll = new JScrollPane(tabelaOrcamentos);
		scroll.setBounds(20, 230, 595, 330);
		scroll.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		painel.add(scroll);
	}
	private void preencherTabela() {
		int totLinhas = tableModel.getRowCount();
		if(tableModel.getRowCount() > 0) {
			for(int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Orcamento o : OrcamentoProcess.orcamentos) {
			tableModel.addRow(new String[] {o.getId("s"), o.getFornecedor(), o.getProduto(), o.getDescricao(), o.getPreco("s"), o.comprar()});
		}
	}
	private void limparCampos() {
		tfId.setText(null);
		tfFornecedor.setText(null);
		tfProduto.setText(null);
		tfDescricao.setText(null);
		tfPreco.setText(null);
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
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
	
	private void adicionar() {
		if(tfId.getText().length() != 0 && tfFornecedor.getText().length() != 0 && tfProduto.getText().length() != 0 && tfDescricao.getText().length() != 0 && tfPreco.getText().length() != 0) {
			df.setCurrency(Currency.getInstance(BRASIL));
			double preco = 0;
			boolean comprar = false;
			try {
				preco = Double.parseDouble(df.parse(tfPreco.getText()).toString());
			}catch(ParseException e) {
				System.out.println(e);
			}
			for(int i = 0; i < OrcamentoProcess.orcamentos.size(); i++) {
				if(OrcamentoProcess.orcamentos.get(i).getProduto().contains(tfProduto.getText())) {
					if(OrcamentoProcess.orcamentos.get(i).getPreco() > preco) {
						OrcamentoProcess.orcamentos.get(i).setMaisBarato(false);
						comprar = true;
					}
				}else {
					comprar = true;
				}
			}
			OrcamentoProcess.orcamentos.add(new Orcamento(Integer.parseInt(tfId.getText()), tfFornecedor.getText(), tfProduto.getText(), tfDescricao.getText(), preco, comprar));
			
			preencherTabela();
			limparCampos();
			OrcamentoProcess.salvar();
		}
	}
	
	private void excluir() {
		
	}

	private void alterar() {
		
	}

	private void buscar() {
		
	}

	

	public static void main(String[] args) {
		OrcamentoProcess.abrir();
		new OrcamentoForm().setVisible(true);
	}
}
