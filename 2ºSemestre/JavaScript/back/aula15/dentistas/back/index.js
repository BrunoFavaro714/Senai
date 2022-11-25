const express = require('express');
const cors = require('cors');

const profissionais = require('./src/routers/profissionais.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use(profissionais);

app.listen(3000, () => {
    console.log('listening');
})