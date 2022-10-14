const readAll = () => {
    fetch('https://patrimoniomongo.herokuapp.com/read/')
    .then( res => { return res.json() })
    .then(itens => {
        let content = itens.items;

        content.forEach(item => {
            let nLinha = document.querySelector(".linha").cloneNode(true);

            nLinha.classList.remove('model');

            let coluna = nLinha.querySelectorAll("td");

            coluna[0].innerHTML = item._id;
            coluna[1].innerHTML = item.ni;
            coluna[2].innerHTML = item.aquisicao;
            coluna[3].innerHTML = item.denominacao;
            coluna[4].innerHTML = item.valor;
            coluna[5].innerHTML = `<img class="imagem" src="../assets/${item.img}" alt="">`;
            coluna[6].innerHTML = `<button type="button" class="excluir" onclick="excluior(${item.ni})">X</button>`
            coluna[7].innerHTML = `<button type="button" class="alterar" onclick="alterar(${item.ni})">Alt</button>`

            document.querySelector(".tab").appendChild(nLinha);
        })
    })
}

function carregar() {
    readAll();
}