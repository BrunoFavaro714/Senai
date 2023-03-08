const ctx = document.getElementById('linha-barra');

const sidebar = document.querySelector('.sidebar');
const alocacao = document.querySelector('.alocacao');
const disponibilidade = document.querySelector('.disponibilidade');
const manutencao = document.querySelector('.manutencao');

const load = () => {
    preencher()
    loadHome()
}
const mudarSetor = (setor) => {
    if(setor == null){
        loadHome()
    }else{
        fetchSetores(setor)
    }
}

const preencher = () => {
    fetch('http://localhost:3000/get/frotaComplera')
    .then(response => { return response.json() })
    .then(infos => {
        infos.Frota.forEach(info => {
            let newDisponibilidade = disponibilidade.querySelector('.dispCard').cloneNode(true);

            newDisponibilidade.classList.remove('model')

            let modelo = (info.modelo).split('/');
            console.log(modelo);

            newDisponibilidade.querySelector('.placa').innerHTML = info.placa;
            newDisponibilidade.querySelector('.modelo').innerHTML = modelo[0];
            newDisponibilidade.querySelector('.funcao').innerHTML = info.funcao;
            newDisponibilidade.querySelector('.setor').innerHTML = info.setor;
            newDisponibilidade.querySelector('.disponCheck').checked = info.disponibilidade;
            newDisponibilidade.querySelector('.dispon').innerHTML = info.disponibilidade == true ? 'Disponivel' : 'Ocupado';

            newDisponibilidade.querySelector('.preventiva').innerHTML = info.last_prev.slice(0,10);
            newDisponibilidade.querySelector('.motorista').innerHTML = info.motorista;
            newDisponibilidade.querySelector('.detalhes').innerHTML = `${modelo[0]} ${modelo[1]}, ${modelo[2]}, com ${modelo[3]}`;

            disponibilidade.appendChild(newDisponibilidade);

            //=====================================================================================
            info.manutencaos.forEach(manus => {
                if(manus.data_fim == null){
                    let newManutencao = manutencao.querySelector('.manuCard').cloneNode(true);

                    newManutencao.classList.remove('model');

                    newManutencao.querySelector('.placa').innerHTML = info.placa;
                    newManutencao.querySelector('.dataIni').innerHTML = manus.data_inicio;
                    newManutencao.querySelector('.previsao').innerHTML = manus.tempo_estimado;

                    newManutencao.querySelector('.modelo').innerHTML = `${modelo[0]} ${modelo[1]}, ${modelo[2]}, com ${modelo[3]}`;
                    newManutencao.querySelector('.funcao').innerHTML = info.funcao;
                    newManutencao.querySelector('.setor').innerHTML = info.setor;
                    newManutencao.querySelector('.motorista').innerHTML = info.motorista;
                    newManutencao.querySelector('.valor').innerHTML = manus.valor;
                    newManutencao.querySelector('.descricao').innerHTML = manus.descricao;

                    manutencao.appendChild(newManutencao);
                }
            })
            
        })
    })

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
    fetch('http://localhost:3000/get/manutencao')
    .then(response => { return response.json() })
    .then(manutencoes => {
        manutencoes.forEach(manu => {

        })
    })
}

const fetchFuncionarios = () => {

}


const loadHome = () => {
    fetch('http://localhost:3000/get/setor/inOrder')
    .then( response => { return response.json() })
    .then(dados => {
        dados.Setor.forEach(info => {
            let existente = false
            for(let i = 0; i < alocacaoGeral.info.mes.length; i++){
                if(alocacaoGeral.info.mes[i] == (info.data_alocada.slice(0,7))){
                    alocacaoGeral.info.limite_alocacao[i] += info.limite_alocavel;
                    alocacaoGeral.info.total_alocado[i] += info.total_alocado;
                    existente = true;
                }
            }
            if(!existente){
                alocacaoGeral.info.mes.push(info.data_alocada.slice(0,7));
                alocacaoGeral.info.limite_alocacao.push(info.limite_alocavel);
                alocacaoGeral.info.total_alocado.push(info.total_alocado);
            }  
        })
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: alocacaoGeral.info.mes,
                datasets: [{
                    type: 'bar',
                    label: "Total Alocado",
                    data: alocacaoGeral.info.total_alocado,
                    borderColor: 'rgba(250,50,0,100)',
                    borderWidth: 2,
                    backgroundColor: 'rgba(250,50,0,0.5)',
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    type: 'line',
                    label: "Limite Alocavel",
                    data: alocacaoGeral.info.limite_alocacao,
                    borderColor: 'rgba(100,100,200,100)',
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderWidth: 2,
                    borderRadius: Number.MAX_VALUE,
                    
                        
                    
                }],
            },
            options: {
                borderJoinStyle: 'bevel',
                indexAxis: 'y',
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Jaguariúna mémes diárias de temperatura'
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        });
    })
}


const alocacoes = {};
const fetchSetores = (setor) => {
    alocacoes[setor] = {
        setor: `${setor}`,
        info: {
            mes: [],
            limite_alocacao: [],
            total_alocado: []
        }
    }
    fetch(`http://localhost:3000/get/setor/inOrder/${setor}`)
    .then( response => { return response.json() })
    .then(dados => {
        dados.Setor.forEach(info => {
            let existente = false
            for(let i = 0; i < alocacoes[setor].info.mes.length; i++){
                if(alocacoes[setor].info.mes[i] == (info.data_alocada.slice(0,7))){
                    alocacoes[setor].info.limite_alocacao[i] += info.limite_alocavel;
                    alocacoes[setor].info.total_alocado[i] += info.total_alocado;
                    existente = true;
                }
            }
            if(!existente){
                alocacoes[setor].info.mes.push(info.data_alocada.slice(0,7));
                alocacoes[setor].info.limite_alocacao.push(info.limite_alocavel);
                alocacoes[setor].info.total_alocado.push(info.total_alocado);
            }  
        })
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: alocacoes[setor].info.mes,
                datasets: [{
                    type: 'bar',
                    label: "Total Alocado",
                    data: alocacoes[setor].info.total_alocado,
                    borderColor: 'rgba(250,50,0,100)',
                    borderWidth: 2,
                    backgroundColor: 'rgba(250,50,0,0.5)',
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    type: 'line',
                    label: "Limite Alocavel",
                    data: alocacoes[setor].info.limite_alocacao,
                    borderColor: 'rgba(100,100,200,100)',
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderWidth: 2,
                    borderRadius: Number.MAX_VALUE,
                    
                        
                    
                }],
            },
            options: {
                borderJoinStyle: 'bevel',
                indexAxis: 'y',
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Jaguariúna mémes diárias de temperatura'
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        });
    })
}