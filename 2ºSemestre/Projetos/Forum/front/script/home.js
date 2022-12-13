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
            nPost.querySelector('.paasa').innerHTML = `<span class="conteudo" onclick="abrirModal(${publi.id_publi}, ${publi.id_user})">${publi.conteudo}</span>`;
            if(publi.img != null){
                nPost.querySelector('.paasa').innerHTML += `<img class="fota" src="${montaImg(publi.img)}" onclick="abrirModal(${publi.id_publi}, ${publi.id_user})" />`;
                nModal.querySelector('.fotaDnv').src = montaImg(publi.img);
            }

            
            nModal.querySelector('.user').innerHTML = `${publi.user}`;
            nModal.querySelector('.description').innerHTML = publi.conteudo;
            nModal.classList.add(`publi${publi.id_publi}`);

            let fechar = `<button class="fecharModal fecharModal${publi.id_publi}" onclick="fecharModel('${publi.id_publi}')">X</button>`;
            nModal.querySelector('.content').innerHTML += fechar;

            nModal.querySelector('.options-bar').innerHTML = `<button class="btnFavPubli" onclick="favoritar(${publi.id_publi})"><img src="../assets/icons/favoritar.png"></button>
                                                            <button class="btnComPubli" onclick="toggleModel('modComentario')"><img src="../assets/icons/comentar.png"></button>
                                                            <button class="btnDelPubli model" onclick="deletarPost(${publi.id_publi})"><img src="../assets/icons/deletar.png"></button>`

            fetch(`http://localhost:3000/reenyedito/get/comentarios/${publi.id_publi}`)
            .then(respComent => { return respComent.json() })
            .then(coments =>  {
                coments.forEach(coment => {
                    let nComentario = nModal.querySelector('.testando').cloneNode(true);

                    nComentario.classList.remove('model');
                    nComentario.classList.add(`coment${coment.id_coment}`);

                    nComentario.querySelector('.userComent').innerHTML = coment.id_user;
                    nComentario.querySelector('.comentzinho').innerHTML = coment.conteudo;
                    nComentario.querySelector('.drop').innerHTML = `<button onclick="dropDown(${coment.id_coment})" class="dropbtn">...</button>
                                                                        <div id="dropdown" class="dropdown-content drop${coment.id_coment} model">
                                                                            <span class="dropResponder" onclick="toggleModel('modResposta')">Responder</span>
                                                                            <span class="dropApagar" onclick="deletarComentario(${coment.id_coment})">Apagar</span>
                                                                        </div> `

                    fetch(`http://localhost:3000/reenyedito/get/respostas/${coment.id_coment}`)
                    .then(respResp => { return respResp.json() })
                    .then(respostas => {
                        respostas.forEach(resposta => {
                            let nRespostas = nComentario.querySelector('.neutra').cloneNode(true);

                            nRespostas.classList.remove('model');
                            nRespostas.classList.add(`resp${resposta.id_coment}`);

                            nRespostas.querySelector('.userResp').innerHTML = resposta.id_user;
                            nRespostas.querySelector('.respostinha').innerHTML = resposta.conteudo;
                            nRespostas.querySelector('.drop').innerHTML = `<button onclick="dropDownResp(${resposta.id_resp})" class="dropbtn">...</button>
                                                                            <div id="dropdown" class="dropdown-content dropResp${resposta.id_resp} model">
                                                                                <span class="dropApagar" onclick="deletarResposta(${resposta.id_resp})">Apagar</span>
                                                                            </div> `

                            nComentario.querySelector('.respostas').appendChild(nRespostas);
                        })
                    })

                    nModal.querySelector('.comentariso').appendChild(nComentario);
                })
            })
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

const toggleModel = (model) => {
    document.querySelector(`.${model}`).classList.toggle('model');

    let publi = localStorage.getItem('publi');

    fecharModel(publi);
}

const fecharModel = (model) => {
    ((document.querySelector(`.fecharModal${model}`).parentNode).parentNode).classList.toggle('model');
}

const abrirModalPublicar = () => {
    document.querySelector('.modPublicar').classList.toggle('model')
}

const abrirModal = (publi, publisher) => {
    var user = JSON.parse(localStorage.getItem('usuario'));

    let publicacao = document.querySelector(`.publi${publi}`)

    publicacao.classList.toggle('model');
    if(publisher == user.id_user || user.id_role == 1){
        publicacao.querySelector('.btnDelPubli').classList.remove('model');
    }
    
    window.localStorage.setItem('publi', publi);
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

const comentar = () => {
    let user = JSON.parse(localStorage.getItem('usuario'));
    let publi = localStorage.getItem('publi');

    let info = {
        "id_user":user.id_user,
        "id_publi":publi,
        "conteudo":document.querySelector('#coment_content').value
    }

    fetch('http://localhost:3000/reenyedito/post/comentarios', {
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(info)
    }).then(res => { return res.json() })
    .then(resp => {
        console.log(resp) ;
        window.location.reload();
    })
}

const dropDown = (coment) => {
    document.querySelector(`.drop${coment}`).classList.toggle('model');
    window.localStorage.setItem('coment', coment);
}

const deletarComentario = (comentario) => {
    var user = JSON.parse(localStorage.getItem('usuario'));

    fetch(`http://localhost:3000/reenyedito/delete/comentarios/${comentario}`, {
        "method":"DELETE",
        "headers":{
            "content-type":"application/json",
            "Authorization":user.token
        }
    }).then(res => { return res.json() })
    .then(resp => { 
        console.log(resp);
        window.location.reload();
    })
}

const responder = () => {
    var user = JSON.parse(localStorage.getItem('usuario'));
    let coment = localStorage.getItem('coment');

    let info = {
        "id_user":user.id_user,
        "id_coment":coment,
        "conteudo":document.querySelector('#respon_content').value
    }

    fetch('http://localhost:3000/reenyedito/post/respostas', {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(info)
    }).then(res => { return res.json() })
    .then(resp => {
        console.log(resp) ;
        window.location.reload();
    })
}

const dropDownResp = (resp) => {
    document.querySelector(`.dropResp${resp}`).classList.toggle('model');
}

const deletarResposta = (resp) => {
    var user = JSON.parse(localStorage.getItem('usuario'));

    fetch(`http://localhost:3000/reenyedito/delete/respostas/${resp}`, {
        "method":"DELETE",
        "headers":{
            "content-type":"application/json",
            "Authorization":user.token
        }
    }).then(res => { return res.json() })
    .then(resp => { 
        console.log(resp);
        window.location.reload();
    })
}