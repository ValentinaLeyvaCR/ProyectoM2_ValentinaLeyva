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

// Obtener un post por id
const getPostByIdService = async (id) => {
    const { rows } = await pool.query(
        `SELECT * FROM posts WHERE id = $1`,
        [id]
    );
    if (rows.length === 0) {
        const error = new Error("Post no encontrado");
        error.status = 404;
        throw error;
    }
    return rows[0];
};

const getPostsByAuthorService = async (authorId) => {
    const { rows } = await pool.query(
        `SELECT
            posts.id,
            posts.title,
            posts.content,
            posts.published,
            posts.created_at,
            authors.id AS author_id,
            authors.name,
            authors.email,
            authors.bio
        FROM posts
        INNER JOIN authors
            ON posts.author_id = authors.id
        WHERE authors.id = $1`,
        [authorId]
    );
    if (rows.length === 0) {
        const error = new Error("No se encontraron posts para este autor");
        error.status = 404;
        throw error;
    }
    return rows;
};

const updatePostService = async (id, author_id, title, content, published) => {
    const { rows } = await pool.query(
        `UPDATE posts
         SET author_id = $1,
             title = $2,
             content = $3,
             published = $4
         WHERE id = $5
         RETURNING *`,
        [author_id, title, content, published, id]
    );
    if (rows.length === 0) {
        const error = new Error("Post no encontrado");
        error.status = 404;
        throw error;
    }
    return rows[0];
};

const deletePostService = async (id) => {
    const { rows } = await pool.query(
        `DELETE FROM posts
        WHERE id = $1
        RETURNING *`,
        [id]
    );
    if (rows.length === 0) {
        const error = new Error("Post no encontrado");
        error.status = 404;
        throw error;
    }
    return rows[0];
};

module.exports = {
    createPostService,
    getPostsService,
    getPostByIdService,
    getPostsByAuthorService,
    updatePostService,
    deletePostService
};