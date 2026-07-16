const { pool } = require("../config/dbConnect")

//RESPONSABILIDAD DE USERS.SERVICES.JS: buscar o conectarse a la base de datos para traer la informacion solicitada por el cliente y retornarla al controller

const getUsersService = async () => {
    const { rows } = await pool.query(`SELECT * FROM users`)//esto sirve para traer todos los usuarios de la tabla users, rows es un array que contiene los objetos de cada usuario
    return rows  
}

const getUsersByIdService = async (id) => {//el id que se recibe por parametro es el que se envia desde el controller, que a su vez lo recibe del cliente
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]) //el $1 es un placeholder que se reemplaza por el valor del id que se pasa como segundo argumento en el array [id]
   // console.log("rows", rows) //para ver que trae la consulta a la base de datos
   console.log(rows)
   return rows
}

const createUserService = async (name, role) => {
    const { rows } = await pool.query(`INSERT INTO users (name, role) VALUES ($1, $2) RETURNING *`, [name, role])
    return rows //retorna el primer objeto del array rows, que es el usuario creado
}

module.exports = {
    getUsersService,
    getUsersByIdService,
    createUserService
}