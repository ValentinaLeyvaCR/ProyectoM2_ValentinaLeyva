//RESPONSABILIDAD: Este middleware es responsable de loguear todas las peticiones que lleguen al servidor, incluyendo el método HTTP, la URL, el código de estado de la respuesta y el tiempo que tardó en procesarse la petición. Esto es útil para monitorear el rendimiento del servidor y para depurar problemas en la aplicación.

const requestLogger = (req, res, next) => {
const startedAt = process.hrtime.bigint()
const requestTime = new Date().toISOString()

res.on('finish', () => {
const finishedAt = process.hrtime.bigint()
const responseTimeMs = Number(finishedAt - startedAt) / 1_000_000

console.log('[RESPONSE]', {
time: new Date().toISOString(),
method: req.method,
url: req.originalUrl,
statusCode: res.statusCode,
responseTimeMs: Number(responseTimeMs.toFixed(2))
})
})

next()
}

const errorHandler = (err, req, res, next) => { //middleware de manejo de errores generales, se debe colocar al final de todas las rutas para que pueda capturar cualquier error que ocurra en las rutas
   res.status(err.status || 500 ).json({
      msg: 'error al procesar la solicitud',
      error: err.message || "Internal server error"
})
}

module.exports = {
    requestLogger,
    errorHandler
}