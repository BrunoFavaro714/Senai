const express = require('express');
const cors = require('cors');

const usuario = require('./src/routers/usuario.js');
const categorias = require('./src/routers/categorias.js');
const publicacoes = require('./src/routers/publicacoes.js');
const comentarios = require('./src/routers/comentarios.js');
const respostas = require('./src/routers/respostas.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use(usuario);
app.use(categorias);
app.use(publicacoes);
app.use(comentarios);
app.use(respostas);

app.listen(3000, () => {
    console.log("Endpoint - http://localhost:3000");
})