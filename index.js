//RESPONSABILIDAD DEL INDEX.JS: levantar el servidor y la conexion con la base de datos.
const {server} = require("./src/server.js")
const {pool} = require("./src/config/dbConnect.js")


const startServer = async () => { // es una funcion asincrona porque la conexion a la base de datos es asincrona
    await pool.query('SELECT 1') // esto es para probar la conexion a la base de datos, si no hay error es porque la conexion es correcta
    console.log("conexion a la base de datos establecida correctamente")
    
    server.listen(3000, () =>{ // esto es para levantar el servidor en el puerto 3000
        console.log("server listen on port 3000");
    })
}

startServer()

process.on("SIGINT", async () => {
    await pool.end()
})