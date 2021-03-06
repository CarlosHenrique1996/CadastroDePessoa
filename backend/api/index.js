const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./rotas/cadastrados')

app.use(bodyParser.json())

app.use('/api/cadastrados', roteador)

app.listen(config.get('api.porta'), () => console.log('Servidor funcionando!'))