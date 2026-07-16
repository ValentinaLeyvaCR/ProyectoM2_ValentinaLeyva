const swaggerSpec = {
    openapi: "3.0.3",

    info: {
        title: "API MiniBlog",
        version: "1.0.0",
        description: "API REST para la gestión de autores y publicaciones."
    },

    servers: [
        {
            url:
                process.env.NODE_ENV === "production"
                    ? "https://proyectom2valentinaleyva-production.up.railway.app"
                    : "http://localhost:3000"
        }
    ],

    tags: [
        {
            name: "General",
            description: "Endpoints generales de la API"
        },
        {
            name: "Authors",
            description: "Operaciones CRUD para autores"
        },
        {
            name: "Posts",
            description: "Operaciones CRUD para publicaciones"
        }
    ],

    paths: {

        "/": {
            get: {
                tags: ["General"],
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
                tags: ["Authors"],
                summary: "Obtener todos los autores",
                responses: {
                    200: {
                        description: "Lista de autores obtenida correctamente"
                    }
                }
            },

            post: {
                tags: ["Authors"],
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
                                },
                                required: ["name", "email"]
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
                tags: ["Authors"],
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
                tags: ["Authors"],
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
                tags: ["Authors"],
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
                tags: ["Posts"],
                summary: "Obtener todos los posts",
                responses: {
                    200: {
                        description: "Lista de publicaciones obtenida correctamente"
                    }
                }
            },

            post: {
                tags: ["Posts"],
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
                                },
                                required: [
                                    "author_id",
                                    "title",
                                    "content"
                                ]
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
                tags: ["Posts"],
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
                tags: ["Posts"],
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
                tags: ["Posts"],
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
                tags: ["Posts"],
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