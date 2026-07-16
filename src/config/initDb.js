//RESPONSABILIDAD DE INITDB.JS: CREAR LA TABLA USERS Y POBLARLA CON DATOS INICIALES SI NO EXISTEN

const { pool } = require("./dbConnect");

const inicializateDatabase = async () => {

    await pool.query(`
        CREATE TABLE IF NOT EXISTS authors(
            id SERIAL PRIMARY KEY,
            name VARCHAR(120) NOT NULL,
            email VARCHAR(120) UNIQUE NOT NULL,
            bio TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    await pool.query(`
    CREATE TABLE IF NOT EXISTS posts(
        id SERIAL PRIMARY KEY,
        author_id INTEGER NOT NULL,
        title VARCHAR(200) NOT NULL,
        content TEXT NOT NULL,
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT fk_author
        FOREIGN KEY(author_id)
        REFERENCES authors(id)
        ON DELETE CASCADE
    );
`);

}

module.exports = {
    inicializateDatabase
}