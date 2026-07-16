//RESPONSABILIDAD DE USERS.CONTROLLER.JS: 
// 1. Recibir la informacion necesaria para procesar la solicitud del cliente -> request -> params, query, body
// 2. llamar a un servicio encargado de traer la informacion de la base de datos
// 3. responder al cliente de forma adecuada 

const { requestLogger } = require("../middlewares/userCrearteMiddleware")
const { getAuthorsService, getAuthorByIdService, createAuthorService, updateAuthorService, deleteAuthorService } = require("../services/authors.services")


const getWellcomeController= (req, res, next) => {
    try{
        res.status(200).json({
     message: 'el servidor esta funcionando correctamente'
        })
    } catch (error) {
       next(error)
    }
}

const getAuthorsController = async (req, res, next) => {
  try {
    const authors = await getAuthorsService()
      res.status(200).json({
          message: 'Autores encontrados',
          data: authors
      })
  } catch (error) {
       next(error)
    }
}

const getAuthorsByIdController = async (req, res, next) => { //como se usa un params se debe usar req y destructurar el id de la siguiente manera
    try {
    const { id } = req.params
    //llamo el servicio que me traiga la informacion del usuario por id
    const author = await getAuthorByIdService(id);
    res.status(200).json({ 
        message: "el autor ha sido encontrado",
        data: author
    })
} catch (error) {
       next(error)
    }
}

const createUserController = async (req, res, next) => {
    try { //el try catch es para manejar errores en caso de que algo falle
        const { name, email, bio } = req.body;
        const author = await createAuthorService(
          name,
          email,
          bio
        );
        res.status(201).json({
            message: "el autor ha sido creado correctamente",
            data: author
        })
    } catch (error) {
       next(error)
    }
}

const updateAuthorController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, bio } = req.body;
        const author = await updateAuthorService(
            id,
            name,
            email,
            bio
        );
        res.status(200).json({
            message: "Autor actualizado correctamente",
            data: author
        });
    } catch (error) {
        next(error);
    }
};

const deleteAuthorController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const author = await deleteAuthorService(id);
        res.status(200).json({
            message: "Autor eliminado correctamente",
            data: author
        });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getWellcomeController,
    getAuthorsController,
    getAuthorsByIdController,
    createUserController,
    updateAuthorController,
    deleteAuthorController
}

