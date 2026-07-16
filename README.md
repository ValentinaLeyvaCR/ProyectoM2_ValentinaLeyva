# 📚 API REST - Authors & Posts

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** como Proyecto Integrador del Módulo 2.

Permite gestionar autores y publicaciones mediante operaciones CRUD, utilizando una arquitectura por capas (Routes, Controllers, Services y Middlewares).

---

# 📌 Descripción

Esta API permite administrar un blog sencillo mediante dos entidades relacionadas:

- **Authors** (Autores)
- **Posts** (Publicaciones)

Cada autor puede tener múltiples publicaciones, implementando una relación **1:N** en PostgreSQL.

Toda la información se almacena de forma persistente en una base de datos PostgreSQL.

---

# ✨ Funcionalidades

## Authors

- Crear autores.
- Listar todos los autores.
- Obtener un autor por ID.
- Actualizar un autor.
- Eliminar un autor.

## Posts

- Crear publicaciones.
- Listar todas las publicaciones.
- Obtener una publicación por ID.
- Obtener todas las publicaciones de un autor.
- Actualizar una publicación.
- Eliminar una publicación.

---

# 🛠️ Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- pg
- Swagger UI
- Supertest
- Vitest
- Railway (Deployment)

---

# 📂 Estructura del proyecto

```text
api
│
├── src
│   ├── config
│   │   ├── dbConnect.js
│   │   ├── initDb.js
│   │   └── swagger.js
│   │
│   ├── controllers
│   │   ├── authors.controller.js
│   │   └── post.controller.js
│   │
│   ├── middlewares
│   │   ├── genMiddleware.js
│   │   ├── postCreateMiddleware.js
│   │   └── userCreateMiddleware.js
│   │
│   ├── routes
│   │   ├── authors.routes.js
│   │   └── post.routes.js
│   │
│   ├── services
│   │   ├── authors.services.js
│   │   └── post.services.js
│   │
│   ├── test
│   │   └── middleware.test.js
│   │
│   └── server.js
│
├── .env.example
├── index.js
├── package.json
└── README.md
```

---

# 🗄️ Modelo de Base de Datos

## Tabla authors

| Campo | Tipo |
|--------|------|
| id | SERIAL |
| name | VARCHAR |
| email | VARCHAR UNIQUE |
| bio | TEXT |
| created_at | TIMESTAMP |

## Tabla posts

| Campo | Tipo |
|--------|------|
| id | SERIAL |
| author_id | INTEGER (FK) |
| title | VARCHAR |
| content | TEXT |
| published | BOOLEAN |
| created_at | TIMESTAMP |

Relación:

```
Author
   │
   ├─────────────< Posts

   Uno a muchos
```

---

# 🚀 Instalación

## Clonar el repositorio

```bash
git clone https://github.com/ValentinaLeyvaCR/ProyectoM2_ValentinaLeyva
```

Entrar al proyecto

```bash
cd api
```

Instalar dependencias

```bash
npm install
```

Crear el archivo `.env`

Tomar como base el archivo:

```
.env.example
```

Completar con los datos de conexión a PostgreSQL.

---

# ▶️ Ejecutar el proyecto

Modo desarrollo

```bash
npm run dev
```

---

# 🧪 Ejecutar los tests

```bash
npm test
```

Los tests fueron realizados utilizando:

- Vitest
- Supertest

---

# 📖 Documentación Swagger

Una vez iniciado el servidor, la documentación se encuentra disponible en:

```
http://localhost:3000/api-docs
```

Desde Swagger es posible consultar todos los endpoints disponibles.

---

# 📌 Endpoints

## Authors

| Método | Endpoint |
|---------|----------|
| GET | /authors |
| GET | /authors/:id |
| POST | /authors |
| PUT | /authors/:id |
| DELETE | /authors/:id |

---

## Posts

| Método | Endpoint |
|---------|----------|
| GET | /posts |
| GET | /posts/:id |
| GET | /posts/author/:authorId |
| POST | /posts |
| PUT | /posts/:id |
| DELETE | /posts/:id |

---

# ✔ Validaciones implementadas

## Authors

- Nombre obligatorio.
- Email obligatorio.
- Email único.

## Posts

- author_id obligatorio.
- title obligatorio.
- content obligatorio.

---

# 📋 Respuestas HTTP

La API utiliza los siguientes códigos de estado:

| Código | Significado |
|---------|-------------|
| 200 | Operación exitosa |
| 201 | Recurso creado |
| 400 | Error de validación |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |

---

# 🤖 Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de apoyo para:

- Resolver errores durante el desarrollo.
- Elaborar pruebas con Supertest y Vitest.
- Documentar la API utilizando Swagger/OpenAPI.



# 🌐 Deployment

La API fue desplegada utilizando Railway.

URL pública:

```
https://AQUI-LA-URL-DE-RAILWAY.app
```

