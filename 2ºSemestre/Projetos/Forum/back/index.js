const express = require('express');
const cors = require('cors');

const usuario = require('./src/routers/usuario.js');
const categorias = require('./src/routers/categorias.js');
const sub_cat = require('./src/routers/sub_cat.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(usuario);
app.use(categorias);
app.use(sub_cat);

app.listen(3000, () => {
    console.log("listening");
})