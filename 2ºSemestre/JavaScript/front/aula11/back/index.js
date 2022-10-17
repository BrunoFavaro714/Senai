const express = require('express');
const cors = require('cors');

const getSolicitacoes = require('./src/routes/getRoutes.js');
const postSolicitacoes = require('./src/routes/postRoutes.js');
const deleteSolicitacoes = require('./src/routes/deleteRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(getSolicitacoes);
app.use(postSolicitacoes);
app.use(deleteSolicitacoes);


app.listen(3000, () => {
    console.log('listening')
})