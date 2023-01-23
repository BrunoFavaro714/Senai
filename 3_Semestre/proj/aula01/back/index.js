const express = require('express');
const cors = require('cors');

const entregadores = require('./src/routers/entregadores.js');
const pedidos = require('./src/routers/pedidos.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use(entregadores);
app.use(pedidos);

app.listen(3000, () => {
    console.log('Endpoint - http://localhost:3000');
})