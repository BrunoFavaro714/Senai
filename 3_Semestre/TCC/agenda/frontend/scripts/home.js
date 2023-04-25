const tagDias = document.querySelector('.dias'),
currentDate = document.querySelector('.current-date'),
prevNextIcon = document.querySelectorAll('.icons span');

const afazeres = [];

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const carregarCalendario = (atividade) => {
    let primeiroDiaMes = new Date(currYear, currMonth, 1).getDay(),
    ultimaDataMes = new Date(currYear, currMonth +1, 0).getDate(),
    ultimoDiaMes = new Date(currYear, currMonth, ultimaDataMes).getDay(),
    ultimaDataMesPassado = new Date(currYear, currMonth, 0).getDate();

    let prog = 0

    let liTag = "";
    for(let i = primeiroDiaMes; i > 0; i--){
        liTag += `<li class="inativo" onclick="clicarDiaInativo(${currMonth - 1}, ${ultimaDataMesPassado - i + 1})">${ultimaDataMesPassado - i + 1}</li>`;
    }
    for(let i = 1; i <= ultimaDataMes; i++){
        let hoje = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "ativo hoje" : "";

        if(atividade[prog] != null){
            if(i == atividade[prog].slice(8,10)){
                liTag += `<li class="${months[new Date(currYear, currMonth).getMonth()]} atividade ${hoje}" onclick="clicarDia(${i})">${i}</li>`;

                prog+=1
            }else{
                liTag += `<li class="${months[new Date(currYear, currMonth).getMonth()]} ${hoje}" onclick="clicarDia(${i})">${i}</li>`;
            }
        }else{
            liTag += `<li class="${months[new Date(currYear, currMonth).getMonth()]} ${hoje}" onclick="clicarDia(${i})">${i}</li>`;
        }
    }
    for(let i = ultimoDiaMes; i < 6; i++){
        liTag += `<li class="inativo" onclick="clicarDiaInativo(${currMonth + 1}, ${i - ultimoDiaMes + 1})">${i - ultimoDiaMes + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    tagDias.innerHTML = liTag;
}

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
        setMes();
    });
});

const clicarDia = (dia) => {
    let dias = document.querySelector('.dias').querySelectorAll('li');
    dias.forEach(d => {
        if(d.classList != `inativo`){
            if(d.innerHTML == dia){
                if( document.querySelector('.ativo') != null){
                    document.querySelector('.ativo').classList.remove("ativo");
                }
                d.classList.add("ativo")
            }
        }
    })
<<<<<<< HEAD
    checkAtividade(dia)
=======
    
>>>>>>> f7ed44e30602a12f2f39228664dbaf0c1ab67a3e
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
    setMes();

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
<<<<<<< HEAD
    checkAtividade(dia)
}

const fetchAfazeres = () => {
    fetch('http://localhost:3000/get/afazeres')
    .then(respo => { return respo.json() })
    .then(afaz => {
        afaz.Afazeres.forEach(afazer => {
            afazeres.push(afazer)
        })
        checkAtividade(date.getDate())
        setMes()
    })
}

const setMes = () => {
    let atividadeMes = [];
    for(let i = 0; i < afazeres.length; i++){
        if(afazeres[i].data.slice(5,7) == (currMonth + 1) && afazeres[i].data.slice(0,4) == currYear){
            atividadeMes.push(afazeres[i].data.slice(0,10))
        }
    }
    carregarCalendario(atividadeMes);
}

const checkAtividade = (dia) => {
    document.querySelector('.selected-day').innerHTML = dia;
    document.querySelector('.atividades-container').innerHTML = `<div class="selected model">
                                                                    <span class="selectedTitle">linha de cor + titulo</span>
                                                                    <span class="selectedContent">Conteudo</span>
                                                                    <span class="selectedUrgen">Urgencia</span>
                                                                </div>`

    afazeres.forEach(afaz => {
        if(afaz.data.slice(0,4) == currYear && afaz.data.slice(5,7) == (currMonth + 1) && afaz.data.slice(8,10) == dia){
            console.log(afaz);
            let newAtividade = document.querySelector('.selected').cloneNode(true)
            
            newAtividade.classList.remove('model');

            newAtividade.querySelector('.selectedTitle').innerHTML = afaz.titulo;
            newAtividade.querySelector('.selectedTitle').style.background = `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 90%, ${afaz.cor} 90%)`;
            newAtividade.querySelector('.selectedContent').innerHTML = afaz.conteudo;
            newAtividade.querySelector('.selectedUrgen').innerHTML = afaz.urgencia

            document.querySelector('.atividades-container').appendChild(newAtividade)
        }
    })

=======
}

const load = () => {
    fetch()
    .then(returned => { return returned.json() })
    .then(data => {
        let afazeresMensal;
        let afazeresMensalConcluicos;

        data.forEach(d => {
            if(d.data.split(5, 7) == currMonth){
                afazeresMensal += 1;
                if(!d.status.concluido){
                    afazeresMensalConcluicos += 1;
                }
            }
        })

        let tarefas = document.querySelector('tarefas')
        tarefas.max = afazeresMensal
    })
>>>>>>> f7ed44e30602a12f2f39228664dbaf0c1ab67a3e
}