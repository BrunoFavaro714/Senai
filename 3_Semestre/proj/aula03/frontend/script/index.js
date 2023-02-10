//Query ↓
const box_vendas = document.querySelector('.box-vendas');
//Query ↑

const load = () => {
    fetch('http://localhost:3000/setores')
    .then( response => { return response.json()} )
    .then( setores => {
        setores.forEach(setor => {
            let nSetor = document.querySelector('.setor').cloneNode(true);
            nSetor.classList.remove('modal')

            nSetor.querySelector('.name').innerHTML = setor.nome;
            nSetor.querySelector('.commission').innerHTML = setor.comissao;

            setor.vendedor.forEach(vendedor => {
                let nVendedor = nSetor.querySelector('.groupVendedor').cloneNode(true);
                nVendedor.classList.remove('modal')

                nVendedor.querySelector('.vendedores-name').innerHTML = vendedor.nome;
                nVendedor.querySelector('.vendedoresSalario').innerHTML = `R$ ${vendedor.salario}`;

                nSetor.querySelector('.vendedorArea').querySelector('.content').appendChild(nVendedor);
            })

            document.querySelector('.column-setor').appendChild(nSetor);
        })
    })

    fetch('http://localhost:3000/vendas')
    .then( response => { return response.json(); })
    .then(vendas => {
        vendas.forEach(venda => {
            let nData = document.querySelector('.vendas').cloneNode(true);
            nData.classList.remove('modal')

            nData.querySelector('.id_venda').innerHTML = venda.id_venda;
            nData.querySelector('.id_vendedor').innerHTML = venda.id_vendedor;
            nData.querySelector('.date-input').value = venda.data.slice(0,10);
            nData.querySelector('.time-input').value = venda.data.slice(11,16);

            venda.detalhes.forEach(detalhe => {
                let nDetalhe = nData.querySelector('.groupDetail').cloneNode(true);
                nDetalhe.classList.remove('modal')

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
        }) 
    }
}

//Collapse ↑

//Toggles ↓

const toggleModalAdd = () => {
    document.querySelector('.modalFrame').classList.toggle('modal')
}
const toggleModalDet = () => {
    document.querySelector('.modalFrameDetalhes').classList.toggle('modal')
}

//Toggles ↑

const selectTypeAdd = () => {
    let selected = document.querySelector('.type-add').value
    console.log(selected);

    if(selected == 'setor'){
        selectSetor();
    }else if(selected == 'produto'){
        selectProduto();
    }else if(selected == 'vendedor'){
        selectVendedor()
    }else if(selected == 'venda'){
        selectedVenda()
    }
}

//Change ↓

const selectSetor = () => {
    document.querySelector('.modal-setor').classList.remove('unselected');
    document.querySelector('.modal-produto').classList.add('unselected');
    document.querySelector('.modal-vendedor').classList.add('unselected');
    document.querySelector('.modal-venda').classList.add('unselected');
    console.log(1);
}
const selectProduto = () => {
    document.querySelector('.modal-setor').classList.add('unselected');
    document.querySelector('.modal-produto').classList.remove('unselected');
    document.querySelector('.modal-vendedor').classList.add('unselected');
    document.querySelector('.modal-venda').classList.add('unselected');
    console.log(2);
}
const selectVendedor = () => {
    document.querySelector('.modal-setor').classList.add('unselected');
    document.querySelector('.modal-produto').classList.add('unselected');
    document.querySelector('.modal-vendedor').classList.remove('unselected');
    document.querySelector('.modal-venda').classList.add('unselected');
    console.log(3);
}
const selectedVenda = () => {
    document.querySelector('.modal-setor').classList.add('unselected');
    document.querySelector('.modal-produto').classList.add('unselected');
    document.querySelector('.modal-vendedor').classList.add('unselected');
    document.querySelector('.modal-venda').classList.remove('unselected');
    console.log(4);
}

//Change ↑

const criarSetor = () => {
    let setorInp = document.querySelector('.modal-setor')
    let data = {
        nome: setorInp.querySelector('.inpNome-setor').value,
        comissao: setorInp.querySelector('.inpComissao-setor').value
    }

    fetch('http://localhost:3000/setor', {
        'method':'POST',
        'headers':{'Content-Type': 'application/json'},
        'body':JSON.stringify(data)
    })

    window.location.reload()
}

const criarProduto = () => {
    let produtoInp = document.querySelector('.modal-produto')
    let data = {
        nome: produtoInp.querySelector('.inpNome-produto').value,
        valor: parseFloat(produtoInp.querySelector('.inpValor-produto').value),
        id_setor: parseInt(produtoInp.querySelector('.inpId-setor').value)
    }

    fetch('http://localhost:3000/produto', {
        'method':'POST',
        'headers':{'Content-Type': 'application/json'},
        'body':JSON.stringify(data)
    })

    window.location.reload()
}

const criarVendedor = () => {
    let vendedorInp = document.querySelector('.modal-vendedor')
    let data = {
        nome: vendedorInp.querySelector('.inpNome-Vendedor').value,
        salario: parseFloat(vendedorInp.querySelector('.inpSalario-Vendedor').value),
        id_setor: parseInt(vendedorInp.querySelector('.inpId-setor').value)
    }

    fetch('http://localhost:3000/vendedor', {
        'method':'POST',
        'headers':{'Content-Type': 'application/json'},
        'body':JSON.stringify(data)
    })

    window.location.reload()
}

var detalhes = [];

const criarVendas = () => {
    

    let produtoInp = document.querySelector('.modal-venda')
    let data = {
        id_vendedor: parseInt(produtoInp.querySelector('.inpId-vendedor').value),
        detalhes: detalhes
    }
    console.log(data);

    fetch('http://localhost:3000/venda', {
        'method':'POST',
        'headers':{'Content-Type': 'application/json'},
        'body':JSON.stringify(data)
    })

    window.location.reload()
}

const setDetalhes = () => {
    detalhes.push({
        id_produto: parseInt(document.querySelector('.inpId-produto').value),
        quantidade: parseInt(document.querySelector('.inpQuantidade').value)
    })
}

const setNullDetalhes = () => {
    detalhes = [];
}