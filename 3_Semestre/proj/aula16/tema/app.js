require('dotenv').config();
const Port = process.env.PORT || 3000;

const express = require('express');
const methodOverride = require('method-override');

const routes = require('./src/routers/routes');

const app = express();
app.set('view engine', 'pug')
.use(express.urlencoded({extended: true}))
.use(express.static('public'))
.use(methodOverride('_mehtod'))
.use('/', routes);

app.listen(Port, () => {
    console.log('Servidor rodando na porta ' + Port);
})