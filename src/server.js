//RESPONSABILIDAD DEL SERVER.JS: armar, configurar y exportar el servidor para poder levantarlo en el index.js

const express = require("express")
const { router: authorsRouter } = require("./routes/authors.routes");
const { router: postsRouter } = require("./routes/post.routes");
const { requestLogger, errorHandler } = require("./middlewares/genMiddleware.js")
const swaggerUi = require("swagger-ui-express")
const { swaggerSpec } = require("./config/swagger.js")

const server = express()

server.use(express.json())

server.use(requestLogger) //middleware de logueo de peticiones, se debe colocar antes de las rutas para que pueda loguear todas las peticiones que lleguen al servidor  

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec) )

server.use(authorsRouter)
server.use(postsRouter)

server.use(errorHandler) //middleware de manejo de errores generales, se debe colocar al final de todas las rutas para que pueda capturar cualquier error que ocurra en las rutas

module.exports = {
    server
} //siempre exportar el server para poder levantarlo en el index.js
// siempre exportar en objeto para poder exportar mas cosas en el futuro

