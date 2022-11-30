const express = require('express');
const cors = require('cors');

//----------------------------------------------------------------
const alunos = require('./src/routers/alunos');
const cursos = require('./src/routers/cursos');
const cursados = require('./src/routers/cursados');
//----------------------------------------------------------------

const app = express();
app.use(express.json());
app.use(cors());

//----------------------------------------------------------------
app.use(alunos);
app.use(cursos);
app.use(cursados);
//----------------------------------------------------------------

app.listen(3000, () => {
    console.log('endpoints - http://localhost:3000');
})