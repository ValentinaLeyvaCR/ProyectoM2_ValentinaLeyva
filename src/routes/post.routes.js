const { Router } = require("express");
const { createPostController, getPostsController, getPostByIdController, getPostsByAuthorController, updatePostController, deletePostController } = require("../controllers/post.controller");
const { postCreateMiddleware } = require("../middlewares/postCreateMiddleware");
const router = Router();

router.get("/posts", getPostsController);

router.post("/posts", postCreateMiddleware, createPostController);

router.get("/posts/author/:authorId", getPostsByAuthorController);

router.get("/posts/:id", getPostByIdController);

router.put("/posts/:id", postCreateMiddleware, updatePostController);

router.delete("/posts/:id", deletePostController);

module.exports = {
    router
};