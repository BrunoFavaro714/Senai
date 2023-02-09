//Query ↓
const box_vendas = document.querySelector('.box-vendas');
//Query ↑

const load = () => {
    fetch('http://localhost:3000/setores')
    .then( response => { return response.json()} )
    .then( setores => {
        setores.forEach(setor => {
            let nSetor = document.querySelector('.setor').cloneNode(true);

            nSetor.querySelector('.name').innerHTML = setor.nome;
            nSetor.querySelector('.commission').innerHTML = setor.comissao;

            setor.vendedor.forEach(vendedor => {
                let nVendedor = nSetor.querySelector('.groupVendedor').cloneNode(true);

                nVendedor.querySelector('.vendedores-name').innerHTML = vendedor.nome;
                nVendedor.querySelector('.vendedoresSalario').innerHTML = `R$ ${vendedor.salario}`;

                nSetor.querySelector('.vendedorArea').querySelector('.content').appendChild(nVendedor);
            })

            console.log(document.querySelector('.column-setor').appendChild(nSetor));

            document.querySelector('.column-setor').appendChild(nSetor);
        })
    })

    fetch('http://localhost:3000/vendas')
    .then( response => { return response.json(); })
    .then(vendas => {
        vendas.forEach(venda => {
            let nData = document.querySelector('.vendas').cloneNode(true);

            nData.querySelector('.id_venda').innerHTML = venda.id_venda;
            nData.querySelector('.id_vendedor').innerHTML = venda.id_vendedor;
            nData.querySelector('.date-input').value = venda.data.slice(0,10);
            nData.querySelector('.time-input').value = venda.data.slice(11,16);

            venda.detalhes.forEach(detalhe => {
                let nDetalhe = nData.querySelector('.groupDetail').cloneNode(true);

                nDetalhe.querySelector('.detail-id_produto').innerHTML = detalhe.id_produto;
                nDetalhe.querySelector('.detail-quantidade').innerHTML = detalhe.quantidade;

                nData.querySelector('.detail-area').querySelector('.content').appendChild(nDetalhe);
            })

            document.querySelector('.column-vendas').appendChild(nData);
        })
    })
}

//Collpse ↓

const collaps = () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
        });
    }
}


//Collapse ↑