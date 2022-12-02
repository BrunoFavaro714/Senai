const express = require('express');
const cors = require('cors');

const usuario = require('./src/routes/routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use(usuario)

app.listen(3000, () => {
    console.log('Endpoint - http://localhost:3000');
});