const { Router } = require("express");
const { createPostController } = require("../controllers/post.controller");
const router = Router();

router.post("/posts", createPostController);

module.exports = {
    router
};