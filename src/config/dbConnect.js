const { pool } = require("pg")

const pool = new pool({
    host: 'localhost', //esto es la direccion de la base de datos, en este caso es local
    port: 5432, // esto es el puerto de la base de datos, en este caso es el puerto por defecto de postgres
    database: 'ft76M2', // esto es el nombre de la base de datos que se va a usar
    user: 'postgres', // esto es el usuario de la base de datos, en este caso es el usuario por defecto de postgres
    password: 12345, // esto es la contraseña del usuario de la base de datos, en este caso es la contraseña por defecto de postgres
    max: 20, // esto es el numero maximo de conexiones que se pueden tener a la base de datos, en este caso es 20
    idleTimeoutMillis: 30000, // esto es el tiempo que una conexion puede estar inactiva antes de ser cerrada, en este caso es 30 segundos
    connectionTimeoutMillis: 2000 // esto es el tiempo que una conexion puede estar esperando para ser establecida antes de ser cerrada, en este caso es 2 segundos
})

module.exports = {
    pool
}

