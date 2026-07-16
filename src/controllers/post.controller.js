const { createPostService } = require("../services/post.services");

const createPostController = async (req, res, next) => {
    try {
        const { author_id, title, content, published } = req.body;
        const post = await createPostService(
            author_id,
            title,
            content,
            published
        );
        res.status(201).json({
            message: "Post creado correctamente",
            data: post
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPostController
};