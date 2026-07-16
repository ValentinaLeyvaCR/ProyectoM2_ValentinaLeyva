const { server } = require("../server");

const swaggerSpec = {
    openapi: "3.0.3",

    info: {
        title: "API Blog",
        version: "1.0.0",
        description: "API REST para la gestión de autores y posts."
    },

    servers: [
        {
            url: "http://localhost:3000"
        }
    ],

    paths: {

        "/": {
            get: {
                summary: "Mensaje de bienvenida",
                description: "Verifica que el servidor esté funcionando.",
                responses: {
                    200: {
                        description: "Servidor funcionando correctamente"
                    }
                }
            }
        },

        "/authors": {

            get: {
                summary: "Obtener todos los autores",
                responses: {
                    200: {
                        description: "Lista de autores obtenida correctamente"
                    }
                }
            },

            post: {
                summary: "Crear un autor",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    email: {
                                        type: "string"
                                    },
                                    bio: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Autor creado correctamente"
                    },
                    400: {
                        description: "Datos inválidos"
                    }
                }
            }

        },

        "/authors/{id}": {

            get: {
                summary: "Obtener un autor por ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer"
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Autor encontrado"
                    },
                    404: {
                        description: "Autor no encontrado"
                    }
                }
            },

            put: {
                summary: "Actualizar un autor",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer"
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    email: {
                                        type: "string"
                                    },
                                    bio: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Autor actualizado correctamente"
                    },
                    404: {
                        description: "Autor no encontrado"
                    }
                }
            },

            delete: {
                summary: "Eliminar un autor",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer"
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Autor eliminado correctamente"
                    },
                    404: {
                        description: "Autor no encontrado"
                    }
                }
            }

        },

        "/posts": {

            get: {
                summary: "Obtener todos los posts",
                responses: {
                    200: {
                        description: "Lista de posts obtenida correctamente"
                    }
                }
            },

            post: {
                summary: "Crear un post",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    author_id: {
                                        type: "integer"
                                    },
                                    title: {
                                        type: "string"
                                    },
                                    content: {
                                        type: "string"
                                    },
                                    published: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Post creado correctamente"
                    },
                    400: {
                        description: "Datos inválidos"
                    }
                }
            }

        },

        "/posts/{id}": {

            get: {
                summary: "Obtener un post por ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer"
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Post encontrado"
                    },
                    404: {
                        description: "Post no encontrado"
                    }
                }
            },

            put: {
                summary: "Actualizar un post",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer"
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    author_id: {
                                        type: "integer"
                                    },
                                    title: {
                                        type: "string"
                                    },
                                    content: {
                                        type: "string"
                                    },
                                    published: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Post actualizado correctamente"
                    },
                    404: {
                        description: "Post no encontrado"
                    }
                }
            },

            delete: {
                summary: "Eliminar un post",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer"
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Post eliminado correctamente"
                    },
                    404: {
                        description: "Post no encontrado"
                    }
                }
            }

        },

        "/posts/author/{authorId}": {

            get: {
                summary: "Obtener los posts de un autor",

                parameters: [
                    {
                        name: "authorId",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer"
                        }
                    }
                ],

                responses: {
                    200: {
                        description: "Posts encontrados correctamente"
                    },
                    404: {
                        description: "No se encontraron posts para este autor"
                    }
                }
            }

        }

    }

};

module.exports = {
    swaggerSpec
};