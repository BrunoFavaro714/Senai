function criarElemento(){
    let itemlista = document.createElement("div");
    itemlista.className = "item-lista";

    let thumbnail = document.createElement("img");
    thumbnail.src = "./assets/resturant.jpg";
    thumbnail.id = "thumb";
    thumbnail.alt = "Foto do Restaurant";

    let like = document.createElement("img");
    like.src = "./assets/vasio.png";
    like.id = "like";
    like.alt = "like";

    let estrala = document.createElement("img");
    estrala.src = "./assets/star.png";
    estrala.id = "avaliacao";
    estrala.alt = "Avaliacao";

    let info = document.createElement("div");
    info.id = "info";

    let nomeRestaurante = document.createElement("p");
    nomeRestaurante.innerHTML = "Backinhos";

    let notaAvaliacao = document.createElement("p");
    notaAvaliacao.appendChild(estrala);
    notaAvaliacao.append("4.7");

    info.appendChild(nomeRestaurante);
    info.appendChild(notaAvaliacao);

    itemlista.appendChild(thumbnail);
    itemlista.appendChild(info);
    itemlista.appendChild(like);

    document.querySelector(".lista").appendChild(itemlista);
}