const model = document.querySelector('.model');

const load = () => {
    getSalgado()
}

const getSalgado = () =>{
    fetch('http://10.87.207.2:3000/salgados')
    .then((response) => { return response.json() })
    .then(salgados => {
        salgados.forEach((salgado) => {
            let nModel = model.cloneNode(true);
            nModel.classList.remove('modal')

            nModel.querySelector('#img_salg').style.backgroundImage = `url(../../assets/${salgado.foto})`;
            nModel.querySelector('.nome').innerHTML = salgado.nome;
            nModel.querySelector('.descricao').innerHTML = salgado.descricao;

            nModel.querySelector('.remove').innerHTML += `<button type="button" id="btn_comentari" onclick="comentariosSalgado(${salgado.id})"><img class="comentario_img" src="../../assets/comentarios.png"></button>`
            nModel.querySelector('.remove').innerHTML += `<button type="button" id="btn_remove" onclick="removerSalgado(${salgado.id})"><img class="remove_img" src="../../assets/remove.png"></button>`

            document.querySelector('.body').appendChild(nModel);
        })
    })
}

const cadSalgado = () => {
    let infos = {
        "nome": "s",
        "descricao": "descricao",
        "foto": "foto"
    }
}

const removerSalgado = (salgado) => {
    console.log(salgado);
    fetch(`http://10.87.207.2:3000/salgado/${salgado}`, {"method": "DELETE"})
    .then(window.location.reload())
}