//RESPONSABILIDAD DEL INDEX.JS: levantar el servidor y la conexion con la base de datos.
const {pool} = require("./src/config/dbConnect.js")
const {server} = require("./src/server.js")
const { loadEnvFile } = require("node:process") //este modulo es para cargar las variables de entorno desde el archivo .env
loadEnvFile('.env') //esto es para cargar las variables de entorno desde el archivo .env 


const startServer = async () => { // es una funcion asincrona porque la conexion a la base de datos es asincrona
    await pool.query('SELECT 1') // esto es para probar la conexion a la base de datos, si no hay error es porque la conexion es correcta
    console.log("conexion a la base de datos establecida correctamente")
    
    server.listen(process.env.PORT, () =>{ // esto es para levantar el servidor en el puerto 3000
        console.log(`server listen on port: ${process.env.PORT}`);
    })
}

startServer()

process.on("SIGINT", async () => { // con esto se cierra la conexion a la base de datos cuando se cierra el servidor
    await pool.end()
    process.exit(0)
})

process.on("SIGTERM", async () => { // con esto se cierra la conexion a la base de datos cuando se cierra el servidor pero en la nube
    await pool.end()
    process.exit(0)
})