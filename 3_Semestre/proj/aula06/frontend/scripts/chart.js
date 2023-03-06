const ctx = document.getElementById('bar-chart-2');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dados.dias,
        datasets: [{
            type: 'bar',
            label: "Maximas Cº",
            data: dados.maximas,
            borderColor: 'rgba(250,50,0,100)',
            borderWidth: 2,
            backgroundColor: 'rgba(250,50,0,0.5)',
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            type: 'line',
            label: "Mínimas Cº",
            data: dados.minimas,
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
                text: 'Jaguariúna médias diárias de temperatura'
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