const { pool } = require("../config/dbConnect");

// Crear un post
const createPostService = async (author_id, title, content, published) => {

    const { rows } = await pool.query(
        `INSERT INTO posts (author_id, title, content, published)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [author_id, title, content, published]
    );

    return rows[0];
};

// Obtener todos los posts
const getPostsService = async () => {

    const { rows } = await pool.query(`
        SELECT *
        FROM posts
        ORDER BY id
    `);

    return rows;
};

module.exports = {
    createPostService,
    getPostsService
};