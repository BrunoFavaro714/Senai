const ctxGeral = document.getElementById('graphGeral');
const ctxLogistica = document.getElementById('graphLogistica');
const ctxTransporte = document.getElementById('graphTransporte');
const ctxColheita = document.getElementById('graphColheita');
const ctxDistribuicao = document.getElementById('graphDistri');

const totalUltimoMes = () => {

    fetch('http://localhost:3000/get/setor/inOrder/desc')
    .then( response => { return response.json() })
    .then(dados => {
        let alocacoes = {
            setor: [],
            mes: [],
            total_alocado: []
        }
        dados.Setor.forEach(info => {
            console.log(alocacoes.mes);
            if(alocacoes.setor.length == 0){
                alocacoes.setor.push(info.nome);
                alocacoes.mes.push(info.data_alocada.slice(0,7));
                alocacoes.total_alocado.push(info.total_alocado);
            }else if((info.data_alocada.slice(0,7)) == alocacoes.mes[0]){
                alocacoes.setor.push(info.nome);
                alocacoes.mes.push(info.data_alocada.slice(0,7));
                alocacoes.total_alocado.push(info.total_alocado);
            }
        })
        console.log(alocacoes);
        new Chart(ctxDistribuicao, {
            type: 'doughnut',
            data: {
                labels: alocacoes.setor,
                datasets: [{
                    type: 'doughnut',
                    data: alocacoes.total_alocado,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 2,
                    backgroundColor: ['rgba(51, 170, 51, 0.333)', 'rgba(170, 119, 51, 0.333)', 'rgba(34, 102, 102, 0.333)'],
                }],
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Jaguariúna mínimas diárias de temperatura'
                    },
                }
            }
        });
    }) 
}

const fetchSetores = () => {
    
    fetch('http://localhost:3000/get/setor/inOrder')
    .then( response => { return response.json() })
    .then(dados => {
        let alocacoes = {
            mes: [],
            limite_alocacao: [],
            total_alocado: []
        }
        dados.Setor.forEach(info => {
            let existente = false
            for(let i = 0; i < alocacoes.mes.length; i++){
                if(alocacoes.mes[i] == (info.data_alocada.slice(0,7))){
                    alocacoes.limite_alocacao[i] += info.limite_alocavel;
                    alocacoes.total_alocado[i] += info.total_alocado;
                    existente = true;
                }
            }
            if(!existente){
                alocacoes.mes.push(info.data_alocada.slice(0,7));
                alocacoes.limite_alocacao.push(info.limite_alocavel);
                alocacoes.total_alocado.push(info.total_alocado);
            }  
        })
        new Chart(ctxGeral, {
            type: 'bar',
            data: {
                labels: alocacoes.mes,
                datasets: [{
                    type: 'bar',
                    label: "Total Alocado",
                    data: alocacoes.total_alocado,
                    borderColor: 'rgba(250,50,0,100)',
                    borderWidth: 2,
                    backgroundColor: 'rgba(250,50,0,0.5)',
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    type: 'line',
                    label: "Limite Alocavel",
                    data: alocacoes.limite_alocacao,
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
    fetch(`http://localhost:3000/get/setor/inOrder/Logistica`)
    .then( response => { return response.json() })
    .then(dados => {
        let alocacoes = {
            mes: [],
            limite_alocacao: [],
            total_alocado: []
        }
        dados.Setor.forEach(info => {
            let existente = false
            for(let i = 0; i < alocacoes.mes.length; i++){
                if(alocacoes.mes[i] == (info.data_alocada.slice(0,7))){
                    alocacoes.limite_alocacao[i] += info.limite_alocavel;
                    alocacoes.total_alocado[i] += info.total_alocado;
                    existente = true;
                }
            }
            if(!existente){
                alocacoes.mes.push(info.data_alocada.slice(0,7));
                alocacoes.limite_alocacao.push(info.limite_alocavel);
                alocacoes.total_alocado.push(info.total_alocado);
            }  
        })
        
        new Chart(ctxLogistica, {
            type: 'bar',
            data: {
                labels: alocacoes.mes,
                datasets: [{
                    type: 'bar',
                    label: "Total Alocado",
                    data: alocacoes.total_alocado,
                    borderColor: 'rgba(250,50,0,100)',
                    borderWidth: 2,
                    backgroundColor: 'rgba(250,50,0,0.5)',
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    type: 'line',
                    label: "Limite Alocavel",
                    data: alocacoes.limite_alocacao,
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
    fetch(`http://localhost:3000/get/setor/inOrder/Transporte`)
    .then( response => { return response.json() })
    .then(dados => {
        let alocacoes = {
            mes: [],
            limite_alocacao: [],
            total_alocado: []
        }
        dados.Setor.forEach(info => {
            let existente = false
            for(let i = 0; i < alocacoes.mes.length; i++){
                if(alocacoes.mes[i] == (info.data_alocada.slice(0,7))){
                    alocacoes.limite_alocacao[i] += info.limite_alocavel;
                    alocacoes.total_alocado[i] += info.total_alocado;
                    existente = true;
                }
            }
            if(!existente){
                alocacoes.mes.push(info.data_alocada.slice(0,7));
                alocacoes.limite_alocacao.push(info.limite_alocavel);
                alocacoes.total_alocado.push(info.total_alocado);
            }  
        })
        
        new Chart(ctxTransporte, {
            type: 'bar',
            data: {
                labels: alocacoes.mes,
                datasets: [{
                    type: 'bar',
                    label: "Total Alocado",
                    data: alocacoes.total_alocado,
                    borderColor: 'rgba(250,50,0,100)',
                    borderWidth: 2,
                    backgroundColor: 'rgba(250,50,0,0.5)',
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    type: 'line',
                    label: "Limite Alocavel",
                    data: alocacoes.limite_alocacao,
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
    fetch(`http://localhost:3000/get/setor/inOrder/Colheita`)
    .then( response => { return response.json() })
    .then(dados => {
        let alocacoes = {
            mes: [],
            limite_alocacao: [],
            total_alocado: []
        }
        dados.Setor.forEach(info => {
            let existente = false
            for(let i = 0; i < alocacoes.mes.length; i++){
                if(alocacoes.mes[i] == (info.data_alocada.slice(0,7))){
                    alocacoes.limite_alocacao[i] += info.limite_alocavel;
                    alocacoes.total_alocado[i] += info.total_alocado;
                    existente = true;
                }
            }
            if(!existente){
                alocacoes.mes.push(info.data_alocada.slice(0,7));
                alocacoes.limite_alocacao.push(info.limite_alocavel);
                alocacoes.total_alocado.push(info.total_alocado);
            }  
        })
        
        new Chart(ctxColheita, {
            type: 'bar',
            data: {
                labels: alocacoes.mes,
                datasets: [{
                    type: 'bar',
                    label: "Total Alocado",
                    data: alocacoes.total_alocado,
                    borderColor: 'rgba(250,50,0,100)',
                    borderWidth: 2,
                    backgroundColor: 'rgba(250,50,0,0.5)',
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    type: 'line',
                    label: "Limite Alocavel",
                    data: alocacoes.limite_alocacao,
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
