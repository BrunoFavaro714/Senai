const express = require('express');
const cors = require('cors');

const app = express();

const routes = require('./src/routes');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("Rodando na Porta 3000");
})