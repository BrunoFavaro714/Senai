const fetchAfazeres = () => {
    let user = JSON.parse(localStorage.getItem('usuario'));

    fetch(`http://localhost:3000/get/afazeres/${user.usuario._id}`)
    .then(respo => { return respo.json() })
    .then(afaz => {
        afaz.Afazeres.forEach(afazer => {
            if(afazer.status.concluido == false){
                let newBlock = document.querySelector('.block').cloneNode(true)
                newBlock.classList.remove('model');

                newBlock.querySelector('.selectedTitle').innerHTML = afazer.titulo;
                newBlock.querySelector('.selectedTitle').style.background = `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 95%, ${afazer.cor} 95%, ${afazer.cor} 100%)`;
                newBlock.querySelector('.selectedContent').innerHTML = afazer.conteudo;
                newBlock.querySelector('.selectedUrgen').innerHTML = afazer.urgencia;
                newBlock.querySelector('.selectedData').innerHTML = afazer.data.slice(0,10)

                document.querySelector('.tarefas-container').appendChild(newBlock)
            }
        })
        
    })
}