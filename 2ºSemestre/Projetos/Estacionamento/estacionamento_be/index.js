const express = require('express');
const cors = require('cors');

const clientes = require('./src/routes/clientesRoutes.js');
const veiculos = require('./src/routes/veiculosRoutes.js');
const vagas = require('./src/routes/vagaRoutes.js');
const relatorio = require('./src/routes/relatorioRoutes.js')

const app = express();
app.use(express.json());
app.use(cors());
app.use(clientes);
app.use(veiculos);
app.use(vagas);
app.use(relatorio);

app.listen(3000, () => {
    console.log('listening');
});