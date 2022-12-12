const post = document.querySelector('.post');
const modal = document.querySelector('.modal');
const timeline = document.querySelector('.timeline');

const carregar = () => {
    var usuerio = localStorage.getItem('usuario');

    usuerio = JSON.parse(usuerio);

    document.querySelector(".nome").innerHTML = usuerio.user;
    document.querySelector("#id_user").value = usuerio.id_user;

    fetchPublic();
}

const fetchPublic = () => {
    fetch('http://localhost:3000/reenyedito/get/posts')
    .then(response => response.json())
    .then(publics => {
        publics.forEach(publi => {
            let nPost = post.cloneNode(true);
            let nModal = modal.cloneNode(true);

            nPost.classList.remove('model');

            nPost.querySelector('.publisher').innerHTML = `${publi.user} às ${publi.horario}`;
            nPost.querySelector('.cat_published').innerHTML = publi.nome_cat;
            nPost.querySelector('.conteudo').innerHTML = publi.conteudo;
            nPost.querySelector('.paasa').innerHTML += `<img class="fota" src="${montaImg(publi.img)}" onclick="abrirModal(${publi.id_publi}, ${publi.id_user})" />`;
            console.log(publi);

            nModal.querySelector('.fotaDnv').src = montaImg(publi.img);
            nModal.querySelector('.user').innerHTML = `${publi.user}`;
            nModal.querySelector('.description').innerHTML = publi.conteudo;
            nModal.classList.add(`publi${publi.id_publi}`);

            nModal.querySelector('.content').innerHTML += `<button class="fecharModal fecharModal${publi.id_publi}" onclick="fecharModal(${publi.id_publi})">X</button>`

            nModal.querySelector('.options-bar').innerHTML = `<button class="btnFavPubli" onclick="favoritar(${publi.id_publi})"><img src="../assets/icons/favoritar.png"></button>
                                                            <button class="btnComPubli" onclick="comentar(${publi.id_publi})"><img src="../assets/icons/comentar.png"></button>
                                                            <button class="btnDelPubli model" onclick="deletarPost(${publi.id_publi})"><img src="../assets/icons/deletar.png"></button>`

            timeline.appendChild(nPost);
            document.querySelector('body').appendChild(nModal);
        })
    })
}

function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `./default.png`;
}

const abrirModalPublicar = () => {
    document.querySelector('.modPublicar').classList.toggle('model')
}

const fecharModal = (publi) => {
    ((document.querySelector(`.fecharModal${publi}`).parentNode).parentNode).classList.toggle('model');
}
const abrirModal = (publi, publisher) => {
    var user = JSON.parse(localStorage.getItem('usuario'));

    let publicacao = document.querySelector(`.publi${publi}`)

    publicacao.classList.toggle('model');
    if(publisher == user.id_user || user.id_role == 1){
        publicacao.querySelector('.btnDelPubli').classList.remove('model');
    }
    
}

const deletarPost = (id_publi) => {
    var user = JSON.parse(localStorage.getItem('usuario'));

    fetch(`http://localhost:3000/reenyedito/delete/publicacoes/${id_publi}`, {
        "method":"DELETE",
        "headers":{
            "Content-Type":"application/json",
            "Authorization":user.token
        }
    }).then(res => { return res.json() })
    .then(resp => { 
        console.log(resp);
        window.location.reload();
    })
}