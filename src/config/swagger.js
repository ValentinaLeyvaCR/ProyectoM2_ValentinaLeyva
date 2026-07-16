const { server } = require("../server");

const swaggerSpec = {

    openapi: "3.0.3",
    info:{
        title: "api blog",
        version: "1.0.0",
        descripcion:""
    },

    servers: [
        {url: 'http://localhost:3000'}
    ],
    paths: {
        "/":{
            get:{
              summary: "mensaje de bienvenida",
              response: {200: {
                descripcion: "el servidor esta funcionando correctamente"
              }

              } 
            }
        }
    }
}

module.exports = {
    swaggerSpec
}