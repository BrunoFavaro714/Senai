const express = require('express');
const cors = require('cors');

const tarefas = require('./src/routes/tarefas.js');

const app = express();

app.use(express.json());
app.use(cors());

app.use(tarefas);

app.listen(3000, () => {
    console.log('Endpoint - http://localhost:3000');
    console.log('Mobile - http://10.87.207.12:3000');
})