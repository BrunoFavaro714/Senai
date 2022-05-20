package visao;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class FormManutencao extends JDialog implements ActionListener{	
	private static final long serialVersionUID = 1L;
	
	private JPanel painel;
	private JLabel id, data, equipamento, custo, tempo;
	private JTextField tfId, tfData, tfEquipamento, tfCusto, tfTempo;
	private JButton cadastrar, alterar, buscar, excluir;
	private JTextArea lista;
	private String texto;
		
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
		
		lista = new JTextArea();
		lista.setBounds(20, 210, 600, 280);
		painel.add(lista);
		
		cadastrar.setBounds(350, 10, 200, 40);
		alterar.setBounds(350, 60, 200, 40);
		buscar.setBounds(350, 110, 200, 40);
		excluir.setBounds(350, 160, 200, 40);
		
		painel.add(cadastrar);
		painel.add(alterar);
		painel.add(buscar);
		painel.add(excluir);
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		
	}
	
	public static void main(String[] args) {
		FormManutencao tela = new FormManutencao();
		tela.setVisible(true);
	}

}
