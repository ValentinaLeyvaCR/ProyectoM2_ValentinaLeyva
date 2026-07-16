// RESPONSABILIDAD:
// Validar la información antes de crear o actualizar un post.

const postCreateMiddleware = (req, res, next) => {
    const { author_id, title, content } = req.body;
    if (!author_id || !title || !content) {
        return res.status(400).json({
            message: "Falta información para crear el post."
        });
    }
    next();
};

module.exports = {
    postCreateMiddleware
};