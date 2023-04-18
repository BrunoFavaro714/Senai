const tagDias = document.querySelector('.dias'),
currentDate = document.querySelector('.current-date'),
prevNextIcon = document.querySelectorAll('.icons span');

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
        liTag += `<li class="inativo" onclick="clicarDiaInativo(${currMonth - 1}, ${ultimaDataMesPassado - i + 1})">${ultimaDataMesPassado - i + 1}</li>`;
    }
    for(let i = 1; i <= ultimaDataMes; i++){
        let hoje = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "ativo" : "";

        liTag += `<li class="${hoje}" onclick="clicarDia(${i})">${i}</li>`
    }
    for(let i = ultimoDiaMes; i < 6; i++){
        liTag += `<li class="inativo" onclick="clicarDiaInativo(${currMonth + 1}, ${i - ultimoDiaMes + 1})">${i - ultimoDiaMes + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    tagDias.innerHTML = liTag;
}

carregarCalendario();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        carregarCalendario();
    });
});

const clicarDia = (dia) => {
    let dias = document.querySelector('.dias').querySelectorAll('li');
    dias.forEach(d => {
        if(d.classList != "inativo"){
            if(d.innerHTML == dia){
                document.querySelector('.ativo').classList.remove("ativo");
                d.classList.add("ativo")
                console.log(d)
            }
        }
    })
}

const clicarDiaInativo = (mes, dia) => {
    currMonth = mes
    if(currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth, new Date().getDate());
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
    carregarCalendario();

    if(currMonth == new Date().getMonth()){
        clicarDia(dia)
    }else{
        let dias = document.querySelector('.dias').querySelectorAll('li');
    dias.forEach(d => {
        if(d.classList != "inativo"){
            if(d.innerHTML == dia){
                d.classList.add("ativo")
                console.log(d)
            }
        }
    })
    }
}