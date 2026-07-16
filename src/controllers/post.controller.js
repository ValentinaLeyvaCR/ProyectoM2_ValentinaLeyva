const { createPostService, getPostsService, getPostByIdService, getPostsByAuthorService, updatePostService, deletePostService} = require("../services/post.services");

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

const getPostsController = async (req, res, next) => {
    try {
        const posts = await getPostsService();
        res.status(200).json({
            message: "Posts encontrados",
            data: posts
        });
    } catch (error) {
        next(error);
    }
};

const getPostByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await getPostByIdService(id);
        res.status(200).json({
            message: "Post encontrado",
            data: post
        });
    } catch (error) {
        next(error);
    }
};

const getPostsByAuthorController = async (req, res, next) => {
    try {
        const { authorId } = req.params;
        const posts = await getPostsByAuthorService(authorId);
        res.status(200).json({
            message: "Posts encontrados",
            data: posts
        });
    } catch (error) {
        next(error);
    }
};

const updatePostController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { author_id, title, content, published } = req.body;
        const post = await updatePostService(
            id,
            author_id,
            title,
            content,
            published
        );
        res.status(200).json({
            message: "Post actualizado correctamente",
            data: post
        });
    } catch (error) {
        next(error);
    }
};

const deletePostController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await deletePostService(id);
        res.status(200).json({
            message: "Post eliminado correctamente",
            data: post
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPostController,
    getPostsController,
    getPostByIdController,
    getPostsByAuthorController,
    updatePostController,
    deletePostController
};