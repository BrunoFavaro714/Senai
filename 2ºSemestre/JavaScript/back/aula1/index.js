const express = require('express');
const app = express();

app.use(express.json());

app.get('/projeto1',(req, res) => {
    res.json("Olá Mundo!");
});

app.listen(3000, () => {
    console.log("respondendo na porta 3000")
});