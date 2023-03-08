const ctxGeral = document.getElementById('linha-barra-Geral');
const ctxLogistica = document.getElementById('linha-barra-Logistica');
const ctxTransporte = document.getElementById('linha-barra-Transporte');
const ctxColheita = document.getElementById('linha-barra-Colheita');

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
        
        Chart(ctxLogistica, {
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
        
        Chart(ctxTransporte, {
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
        
        Chart(ctxColheita, {
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
