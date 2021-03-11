const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const rota = require('./app/routes/rotas')
require('./config/configBD')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(rota)

app.listen(5000, () => console.log("Serve is Running"))

