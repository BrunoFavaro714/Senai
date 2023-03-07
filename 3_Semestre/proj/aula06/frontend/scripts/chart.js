const ctx = document.getElementById('linha-barra');

const loadHome = () => {
    fetch('http://localhost:3000/get/setor/inOrder')
    .then( response => { return response.json() })
    .then(dados => {
        dados.Setor.forEach(info => {
            if(info.nome == 'Logistica'){
                console.log(info);
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


