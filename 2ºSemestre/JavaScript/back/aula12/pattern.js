class Leaf{

    constructor(sabor, preco_uni, qtd){
        this.sabor = sabor;
        this.preco_uni = preco_uni;
        this.qtd = qtd;
    }

    showPizza() {
		console.log(this.sabor + " : R$" + this.preco_uni);
	}
}

class Composite{

    constructor(id, data, hora, valor_total){
        this.id = id
        this.data = data;
        this.hora = hora;
        this.valor_total = valor_total;
    }

    components = [];

    addComponent(com) {
        this.components.push(com);
    }

    showPedido() {
        this.components.forEach(element => {
            console.log(element)
        });
    }
}

pepperoni = new Leaf("PEPPERONI C/B CATUPIRY", 54.32, 1);
marguerita = new Leaf("MARGUERITA S/B", 51.22, 1);
frango_lomb = new Leaf("MEIA FRANGO C/CATUPIRY - MEIA LOMBO CANADENSE C/B CHADDER", 63.76, 1);
calabras = new Leaf("CALABRESA", 48.67, 2);

pedido = new Composite(1, '03/11/2022', '21:56:34', 270.00);

pedido.addComponent(pepperoni);
pedido.addComponent(marguerita);
pedido.addComponent(frango_lomb);
pedido.addComponent(calabras);