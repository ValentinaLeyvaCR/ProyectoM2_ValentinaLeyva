//RESPONSABILIDAD DEL SERVER.JS: armar, configurar y exportar el servidor para poder levantarlo en el index.js

const express = require("express")
const {router} = require("./routes/index.js")

const server = express()

server.use(express.json())

server.use(router)

module.exports = {
    server
} //siempre exportar el server para poder levantarlo en el index.js
// siempre exportar en objeto para poder exportar mas cosas en el futuro

