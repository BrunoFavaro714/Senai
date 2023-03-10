const sidebar = document.querySelector('.sidebar');
const alocacao = document.querySelector('.alocacao');
const disponibilidade = document.querySelector('.disponibilidade');
const manutencao = document.querySelector('.manutencao');

const load = () => {
    preencher()
    fetchSetores()
    totalUltimoMes()
}
const mudarSetor = (setor) => {
    let graphis = document.querySelector('.grafico-analise').querySelectorAll('div');

    graphis.forEach(g => {
        g.classList.add('model')
    })

    document.querySelector(`.graph-container-${setor}`).classList.remove('model')
}

const preencher = () => {
    fetch('http://localhost:3000/get/frotaComplera')
    .then(response => { return response.json() })
    .then(infos => {
        infos.Frota.forEach(info => {
            let newDisponibilidade = disponibilidade.querySelector('.dispCard').cloneNode(true);

            newDisponibilidade.classList.remove('model')

            let modelo = (info.modelo).split('/');

            newDisponibilidade.querySelector('.placa').innerHTML = info.placa;
            newDisponibilidade.querySelector('.modelo').innerHTML = `${modelo[0]} ${modelo[1]}, ${modelo[2]}`;
            newDisponibilidade.querySelector('.funcao').innerHTML = info.funcao;
            newDisponibilidade.querySelector('.setor').innerHTML = info.setor;
            newDisponibilidade.querySelector('.dispon').innerHTML = info.disponibilidade == true ? 'Disponivel' : 'Ocupado';
            if(!info.disponibilidade){
                newDisponibilidade.querySelector('.iconDisponivel').classList.add('covered');
                newDisponibilidade.querySelector('.iconIndisponivel').classList.remove('model')
            }
            
            newDisponibilidade.querySelector('.expand').addEventListener('click', () => {
                newDisponibilidade.querySelector('.infos-geral').classList.toggle('model');
            })

            newDisponibilidade.querySelector('.preventiva').innerHTML += info.last_prev.slice(0,10);
            newDisponibilidade.querySelector('.motorista').innerHTML += info.motorista;
            newDisponibilidade.querySelector('.detalhes').innerHTML += `${modelo[3]}`;

            disponibilidade.appendChild(newDisponibilidade);

            //=====================================================================================
            info.manutencaos.forEach(manus => {
                if(manus.data_fim == null){
                    let newManutencao = manutencao.querySelector('.manuCard').cloneNode(true);

                    newManutencao.classList.remove('model');

                    newManutencao.querySelector('.placa').innerHTML = info.placa;
                    newManutencao.querySelector('.dataIni').innerHTML = manus.data_inicio.slice(0,10);
                    newManutencao.querySelector('.previsao').innerHTML = manus.tempo_estimado;

                    newManutencao.querySelector('.modelo').innerHTML = `${modelo[0]} ${modelo[1]}, ${modelo[2]}, com ${modelo[3]}`;
                    newManutencao.querySelector('.funcao').innerHTML = info.funcao;
                    newManutencao.querySelector('.setor').innerHTML = info.setor;
                    newManutencao.querySelector('.motorista').innerHTML = info.motorista;
                    newManutencao.querySelector('.valor').innerHTML = `R$ ${manus.valor}`;
                    newManutencao.querySelector('.descricao').innerHTML = manus.descricao;

                    manutencao.appendChild(newManutencao);
                }
            })
            
        })
    })

}

