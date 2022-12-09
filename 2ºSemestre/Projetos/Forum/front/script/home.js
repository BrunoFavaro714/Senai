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

            nPost.querySelector('.publisher').innerHTML = `${publi.user} às ${publi.horario}`;
            nPost.querySelector('.cat_published').innerHTML = publi.nome_cat;
            nPost.querySelector('.conteudo').innerHTML = publi.conteudo;

            fetch('http://localhost:3000/reenyedito/get/posts/images/1')
            .then(resp => resp.blob())
            .then(myBlob => {
            })

            console.log(publi);

            timeline.appendChild(nPost);
        })
    })
}