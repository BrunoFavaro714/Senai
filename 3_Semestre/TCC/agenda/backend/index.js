require('dotenv').config();

const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const mon = require('./config/connection');
mon.getConnectionInfo();

const usuarios = require('./src/routers/usuario');
const afazeres = require('./src/routers/afazeres');

const app = express();
app.use(express.json());
app.use(cors());
app.use(usuarios);
app.use(afazeres);

app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT} - http://localhost:${PORT}/`);
})