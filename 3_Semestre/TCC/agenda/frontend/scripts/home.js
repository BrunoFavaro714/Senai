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
    checkAtividade(dia)
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
    checkAtividade(dia)
}

const fetchAfazeres = () => {
    let user = JSON.parse(localStorage.getItem('usuario'));

    fetch(`http://localhost:3000/get/afazeres/${user.usuario._id}`)
    .then(respo => { return respo.json() })
    .then(afaz => {
        let concluidos = 0
        afaz.Afazeres.forEach(afazer => {
            afazeres.push(afazer);

            if(afazer.status.concluido){
                concluidos+=1
            }
        });

        document.querySelector('.tarefas').max = afazeres.length
        document.querySelector('.tarefas').value = concluidos

        checkAtividade(date.getDate());
        setMes();
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

            let newAtividade = document.querySelector('.selected').cloneNode(true)
            
            newAtividade.classList.remove('model');

            newAtividade.querySelector('.selectedTitle').innerHTML = afaz.titulo;

            if(afaz.status.concluido){
                newAtividade.querySelector('.selectedTitle').style.background = `#ffffff`;
            }else{
                newAtividade.querySelector('.selectedTitle').style.background = `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 85%, ${afaz.cor} 85%, ${afaz.cor} 95%, rgba(255,255,255,1) 95%)`;
            }         
            newAtividade.querySelector('.selectedContent').innerHTML = afaz.conteudo;
            newAtividade.querySelector('.selectedUrgen').innerHTML = afaz.urgencia

            newAtividade.addEventListener('click', () => {
                console.log(afaz);

                let attModal = document.querySelector('.atividadeModal');
                attModal.querySelector('.title').value = afaz.titulo;
                attModal.querySelector('#graus').value = afaz.urgencia;
                attModal.querySelector('.date').value = (afaz.data.slice(0, 10))
                attModal.querySelector('.color').value = afaz.cor;
                attModal.querySelector('.textbox').innerHTML = afaz.conteudo;

                attModal.querySelector('.conclude').addEventListener('click', () => {concluirAtaz(afaz._id)});
                attModal.querySelector('.exclude').addEventListener('click', () => {excluirAfaz(afaz._id)})
                attModal.querySelector('.saveChange').addEventListener('click', () => {salvarAlt(afaz._id)})
                
                document.querySelector('.atividadeModal-container').classList.remove('model');
            })

            document.querySelector('.atividades-container').appendChild(newAtividade)
        }
    })

}


const toggleModel = () => {
    document.querySelector('.modal-container').classList.toggle('model');
}

const addAfazer = () => {
    let user = JSON.parse(localStorage.getItem('usuario'))

    if(document.querySelector('.date').value == null || document.querySelector('.title').value == null || document.querySelector('.textbox').value == null){
        let model = document.querySelector('.model')
        let info = {
            id_usuario: user.usuario._id,
            data: model.querySelector('.date').value,
            titulo: model.querySelector('.').value,
            conteudo: model.querySelector('.textbox').value,
            cor: model.querySelector('.color').value,
            urgencia: model.querySelector('#graus').value,
            status:{
                concluido: false,
                atrazado: false
            }
        }

        fetch('http://localhost:3000/post/afazeres', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }else{
        alert("Preencha todos os campos")
    }
}

const salvarAlt = (id) => {
    let atividadeModal = document.querySelector('.atividadeModal')
    let info = {
        id_usuario: user.usuario._id,
        data: atividadeModal.querySelector('.date').value,
        titulo: atividadeModal.querySelector('.').value,
        conteudo: atividadeModal.querySelector('.textbox').value,
        cor: atividadeModal.querySelector('.color').value,
        urgencia: atividadeModal.querySelector('#graus').value,
        status:{
            concluido: false,
            atrazado: false
        }
    }
    fetch(`http://localhost:3000/put/afazeres/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

}

const excluirAfaz = (id) => {
    fetch(`http://localhost:3000/delete/afazeres/${id}`, {
        method:'DELETE'
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

const concluirAtaz = () => {
    let atividadeModal = document.querySelector('.atividadeModal')
    let info = {
        id_usuario: user.usuario._id,
        data: atividadeModal.querySelector('.date').value,
        titulo: atividadeModal.querySelector('.').value,
        conteudo: atividadeModal.querySelector('.textbox').value,
        cor: atividadeModal.querySelector('.color').value,
        urgencia: atividadeModal.querySelector('#graus').value,
        status:{
            concluido: true,
            atrazado: false
        }
    }

    fetch('http://localhost:3000/post/afazeres', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify(info)
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}