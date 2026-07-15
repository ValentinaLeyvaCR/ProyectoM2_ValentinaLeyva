//RESPONSABILIDAD DE USERS.SERVICES.JS: buscar o conectarse a la base de datos para traer la informacion solicitada por el cliente y retornarla al controller
const users = [
{
   id: 1, 
   nombre: "Valentina",
   rol: 'Estudiante',
},

{
   id: 2,
   nombre: "Juan",
   rol: 'Estudiante',
}
]

const getUsersService = () => {
    return users
}

const getUsersByIdService = (id) => {
    //si se hace la consulta a la base de datos, aqui va la logica para buscar en la base de datos la informacion exacta de la solicitud que se requiere, en este caso el id del usuario
    
   //como es con un array de objetos se hace de esta manera
   return users.find( user => user.id === Number(id))
}

module.exports = {
    getUsersService,
    getUsersByIdService
}