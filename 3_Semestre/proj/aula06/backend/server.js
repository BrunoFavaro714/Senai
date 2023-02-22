require('dotenv').config();

const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const mon = require('./config/connection');
mon.getConnectionInfo();

const funcionarios = require('./src/routes/funcionarios');
const frota = require('./src/routes/frota');
const manutencao = require('./src/routes/manutencao');

const app = express();
app.use(express.json());
app.use(cors());
app.use(funcionarios);
app.use(frota);
app.use(manutencao);

app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT} - http://localhost:3000/`);
});