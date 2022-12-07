const post = document.querySelector('.post');
const timeline = document.querySelector('.timeline');

const fetchPublic = () => {
    fetch('http://localhost:3000/reenyedito/get/publicacoes')
    .then(response => response.json())
    .then(publics => {
        publics.forEach(publi => {
            
            let nPost = post.cloneNode(true);

            nPost.querySelector('.fota').src = '#';
            nPost.querySelector('.publisher').innerHTML = `${publi.id_user} às ${publi.horario}`;
            nPost.querySelector('.cat_publisher')

            timeline.appendChild(nPost);
        })
    })
}