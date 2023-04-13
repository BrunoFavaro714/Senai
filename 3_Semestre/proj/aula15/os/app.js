require('dotenv').config()

const PORT = process.env.PORT || 3000

const express = require('express')

const methodOverride = require('method-override')





const app = express()

app.set('view engine', 'pug')

.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.use(methodOverride('_method'))
.use('/inicio', (req, res) => {
    res.render('index', { title: 'Página inicial' })
})
.use('/oss', (req, res) => {
    let dados = [
        { id: 1, descricao: 'Torneira Pingando' },
        { id: 2, descricao: 'Torneira Quebrada' },
        { id: 3, descricao: 'Torneira Feia' },
    ]
    res.render('oss', { title: 'Ordens de serviço', dados: dados })
})

app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))