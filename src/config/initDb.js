//RESPONSABILIDAD DE INITDB.JS: CREAR LA TABLA USERS Y POBLARLA CON DATOS INICIALES SI NO EXISTEN

const { pool } = require("./dbConnect");

const inicializateDatabase = async () => {

    await pool.query(
    `CREATE TABLE IF NOT EXISTS users (
     id SERIAL PRIMARY KEY,
     name VARCHAR(120) NOT NULL,
     role VARCHAR(20) NOT NULL DEFAULT 'student'
    )`
    )

const { rows } = await pool.query(`SELECT COUNT(*)::int AS count FROM users`)
if (rows[0].count === 0) {
    await pool.query(`
        INSERT INTO users (name, role) VALUES ($1,$2), ($3,$4)`,
        ['valentina', 'student', 'sebastian', 'teacher']
    )
}
}

module.exports = {
    inicializateDatabase
}