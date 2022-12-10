const post = document.querySelector('.post');
const timeline = document.querySelector('.timeline');

const carregar = () => {
    var usuerio = localStorage.getItem('usuario');

    usuerio = JSON.parse(usuerio);

    document.querySelector(".nome").innerHTML = usuerio.user;
    fetchPublic();
}

const fetchPublic = () => {
    fetch('http://localhost:3000/reenyedito/get/posts')
    .then(response => response.json())
    .then(publics => {
        publics.forEach(publi => {
            let nPost = post.cloneNode(true);

            nPost.classList.remove('model');

            nPost.querySelector('.publisher').innerHTML = `${publi.user} às ${publi.horario}`;
            nPost.querySelector('.cat_published').innerHTML = publi.nome_cat;
            nPost.querySelector('.conteudo').innerHTML = publi.conteudo;
            nPost.querySelector('.fota').src = montaImg(publi.img);
            console.log(publi);

            timeline.appendChild(nPost);
        })
    })
}

function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `./default.png`;
}