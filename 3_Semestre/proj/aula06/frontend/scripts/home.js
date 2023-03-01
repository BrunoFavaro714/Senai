const sidebar = document.querySelector('.sidebar');
const alocacao = document.querySelector('.alocacao');
const disponibilidade = document.querySelector('.disponibilidade');
const manutencao = document.querySelector('.manutencao');

const load = () => {
    preencher()
}

const preencher = () => {
    let frota = fetchFrota();
    let manutencao = fetchManutencao();
    let funcionarios = fetchFuncionarios();

}

const fetchFrota = () => {
    fetch('http://localhost:3000/get/frota')
    .then(response => { return response.json() })
    .then(frota => {
        frota.Frota.forEach(veiculo => {
            console.log(veiculo);
            let newDisponibilidade = disponibilidade.querySelector('.dispCard').cloneNode(true);

            let modelo = (veiculo.modelo).split('/');
            console.log(modelo);

            newDisponibilidade.querySelector('.placa').innerHTML = veiculo.placa;
            newDisponibilidade.querySelector('.modelo').innerHTML = modelo[0];
            newDisponibilidade.querySelector('.funcao').innerHTML = veiculo.funcao;
            newDisponibilidade.querySelector('.setor').innerHTML = veiculo.setor;
            newDisponibilidade.querySelector('.disponCheck').checked = veiculo.disponibilidade;
            newDisponibilidade.querySelector('.dispon').innerHTML = veiculo.disponibilidade == true ? 'Disponivel' : 'Ocupado';

            newDisponibilidade.querySelector('.preventiva').innerHTML = veiculo.last_prev.slice(0,10);
            newDisponibilidade.querySelector('.motorista').innerHTML = veiculo.motorista;
            newDisponibilidade.querySelector('.detalhes').innerHTML = `${modelo[0]} ${modelo[1]}, ${modelo[2]}, com ${modelo[3]}`;

            disponibilidade.appendChild(newDisponibilidade);
        })
    })
}

const fetchManutencao = () => {

}

const fetchFuncionarios = () => {

}