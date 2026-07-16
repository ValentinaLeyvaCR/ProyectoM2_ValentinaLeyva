//RESPONSABILIDAD DE USERS.CONTROLLER.JS: 
// 1. Recibir la informacion necesaria para procesar la solicitud del cliente -> request -> params, query, body
// 2. llamar a un servicio encargado de traer la informacion de la base de datos
// 3. responder al cliente de forma adecuada 

const { requestLogger } = require("../middlewares/userCrearteMiddleware")
const { getUsersService, getUsersByIdService, createUserService } = require("../services/user.services")


const getWellcomeController= (req, res) => {
      res.status(200).json({
   message: 'el servidor esta funcionando correctamente'
      })
}

const getUsersController = async (req, res) => {

    const users = await getUsersService()
      res.status(200).json({
          message: 'usuarios encontrados',
          data: users
      })
}

const getUsersByIdController = async (req, res) => { //como se usa un params se debe usar req y destructurar el id de la siguiente manera
    const { id } = req.params
    //llamo el servicio que me traiga la informacion del usuario por id
    const user = await getUsersByIdService(id)
    res.status(200).json({ 
        message: "el usuario ha sido encontrado",
        data: user
    })
}

const createUserController = async (req, res) => {
    const { name, role } = req.body
    const dbResponse = await createUserService(name, role)
    res.status(201).json({
        message: "el usuario ha sido creado",
        data: dbResponse
    })
}

module.exports = {
    getWellcomeController,
    getUsersController,
    getUsersByIdController,
    createUserController
}

 