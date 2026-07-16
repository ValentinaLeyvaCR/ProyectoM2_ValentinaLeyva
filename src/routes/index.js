//RESPONSABILIDAD DEL INDEX.JS DE ROUTES: armas el router, las rutas y exportarlo.

const {Router} = require("express")
const {getWellcomeController, getUsersController, getUsersByIdController, createUserController} = require("../controllers/users.controller")
const { userCreateMiddleware } = require("../middlewares/userCrearteMiddleware")

const router = Router()

router.get("/", getWellcomeController)

router.get("/users", getUsersController)

router.get("/users/:id", getUsersByIdController)

router.post("/users", userCreateMiddleware, createUserController) //el middleware se ejecuta antes del controller, si el middleware no llama a next() el controller no se ejecuta

module.exports = {
    router
}

