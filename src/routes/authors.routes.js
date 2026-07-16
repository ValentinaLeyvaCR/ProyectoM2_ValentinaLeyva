//RESPONSABILIDAD DEL INDEX.JS DE ROUTES: armas el router, las rutas y exportarlo.

const {Router} = require("express")
const {getWellcomeController, getAuthorsController, getAuthorsByIdController, createUserController, updateAuthorController, deleteAuthorController} = require("../controllers/authors.controller")
const { authorCreateMiddleware } = require("../middlewares/userCrearteMiddleware")

const router = Router()

router.get("/", getWellcomeController)

router.get("/authors", getAuthorsController);

router.get("/authors/:id", getAuthorsByIdController);

router.post("/authors", authorCreateMiddleware, createUserController) //el middleware se ejecuta antes del controller, si el middleware no llama a next() el controller no se ejecuta

router.put("/authors/:id",authorCreateMiddleware,updateAuthorController);

router.delete("/authors/:id", deleteAuthorController);



module.exports = {
    router
}

