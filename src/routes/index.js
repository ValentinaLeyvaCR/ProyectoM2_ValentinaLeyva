//RESPONSABILIDAD DEL INDEX.JS DE ROUTES: armas el router, las rutas y exportarlo.

const {Router} = require("express")
const {getWellcomeController, getUsersController, getUsersByIdController} = require("../controllers/users.controller")

const router = Router()

router.get("/", getWellcomeController)

router.get("/users", getUsersController)

router.get("/users/:id", getUsersByIdController)

module.exports = {
    router
}

