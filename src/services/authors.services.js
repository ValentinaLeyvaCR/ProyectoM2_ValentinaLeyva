const { pool } = require("../config/dbConnect")

//RESPONSABILIDAD DE USERS.SERVICES.JS: buscar o conectarse a la base de datos para traer la informacion solicitada por el cliente y retornarla al controller

// Obtener todos los autores
const getAuthorsService = async () => {
    const { rows } = await pool.query(`
        SELECT *
        FROM authors
        ORDER BY id
    `);

    return rows;
};

// Obtener un autor por id
const getAuthorByIdService = async (id) => {
    const { rows } = await pool.query(`
        SELECT *
        FROM authors
        WHERE id = $1
    `, [id]);

    if (rows.length === 0) {
        const error = new Error("Autor no encontrado");
        error.status = 404;
        throw error;
    }

    return rows[0];
};

// Crear un autor
const createAuthorService = async (name, email, bio) => {
    const { rows } = await pool.query(`
        INSERT INTO authors (name, email, bio)
        VALUES ($1, $2, $3)
        RETURNING *
    `, [name, email, bio]);

    return rows[0];
};

//
const updateAuthorService = async (id, name, email, bio) => {

    const { rows } = await pool.query(
        `UPDATE authors
         SET name = $1,
             email = $2,
             bio = $3
         WHERE id = $4
         RETURNING *`,
        [name, email, bio, id]
    );

    if (rows.length === 0) {
        const error = new Error("Autor no encontrado");
        error.status = 404;
        throw error;
    }

    return rows[0];
};

const deleteAuthorService = async (id) => {

    const { rows } = await pool.query(
        `DELETE FROM authors
         WHERE id = $1
         RETURNING *`,
        [id]
    );

    if (rows.length === 0) {
        const error = new Error("Autor no encontrado");
        error.status = 404;
        throw error;
    }

    return rows[0];
};

module.exports = {
    getAuthorsService,
    getAuthorByIdService,
    createAuthorService,
    updateAuthorService,
    deleteAuthorService
}