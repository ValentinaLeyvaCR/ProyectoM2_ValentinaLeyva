//RESPONSABILIDAD DE USERS.CONTROLLER.JS: 
// 1. Recibir la informacion necesaria para procesar la solicitud del cliente -> request -> params, query, body
// 2. llamar a un servicio encargado de traer la informacion de la base de datos
// 3. responder al cliente de forma adecuada 

const { getUsersService, getUsersByIdService } = require("../services/user.services")


const getWellcomeController= (req, res) => {
      res.status(200).json({
   message: 'el servidor esta funcionando correctamente'
      })
}

const getUsersController = (req, res) => {

    const users = getUsersService()
      res.status(200).json({
          message: 'usuarios encontrados',
          data: users
      })
}

const getUsersByIdController = (req, res) => { //como se usa un params se debe usar req y destructurar el id de la siguiente manera
    const { id } = req.params
    //llamo el servicio que me traiga la informacion del usuario por id
    const user = getUsersByIdService(id)
    res.status(200).json({ 
        message: "el usuario ha sido encontrado",
        data: user
    })
}

module.exports = {
    getWellcomeController,
    getUsersController,
    getUsersByIdController
}

 