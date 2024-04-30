const express = require('express')
const jugador = require("../3-jugador/jugador")
const app = express()



app.get('/', (req,res) => (res.send('Hello World')))
app.get('/jugadores', (req,res) => (res.send(jugador.retornar())))


app.listen(3000, () => (console.log('Server running on port 3000')))