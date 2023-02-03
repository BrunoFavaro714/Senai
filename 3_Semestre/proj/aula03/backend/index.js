const express = require('express');
const cors = require('cors');

const setores = require('./src/routes/setores');
const produtos = require('./src/routes/produtos');
const vendedores = require('./src/routes/vendedores');
const detalhes = require('./src/routes/detalhes');
const vendas = require('./src/routes/vendas');

const app = express();

app.use(express.json());
app.use(cors());

app.use(setores);
app.use(produtos);
app.use(vendedores);
app.use(detalhes);
app.use(vendas);

app.listen(3000, () => {
    console.log('Endpoint - http://localhost:3000')
});