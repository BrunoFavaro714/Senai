const tagDias = document.querySelector('.dias'),
currentDate = document.querySelector('.mes'),
prevNextIcon = document.querySelectorAll('.icon span');

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const carregarCalendario = () => {
    let primeiroDiaMes = new Date(currYear, currMonth, 1).getDay(),
    ultimaDataMes = new Date(currYear, currMonth +1, 0).getDate(),
    ultimoDiaMes = new Date(currYear, currMonth, ultimaDataMes).getDay(),
    ultimaDataMesPassado = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";
    for(let i = primeiroDiaMes; i > 0; i--){
        liTag += `<li class="inativo">${ultimaDataMesPassado - i + 1}</li>`;
    }
    for(let i = 1; i <= ultimaDataMes; i++){
        let hoje = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "ativo" : "";

        liTag += `<li class="${hoje}">${i}</li>`
    }
    for(let i = ultimoDiaMes; i < 6; i++){
        liTag += `<li class="inativo">${i - ultimoDiaMes + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    tagDias.innerHTML = liTag;
}
carregarCalendario();