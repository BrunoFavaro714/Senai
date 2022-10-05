const express = require('express');
const cors = require('cors');

const solicitacoes = require('./src/routes/solicitaRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(solicitacoes);

app.listen(3000, () => {
    console.log('listening')
});