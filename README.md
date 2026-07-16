# 📚 API REST - Authors & Posts

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** como Proyecto Integrador del Módulo 2 de Henry.

La aplicación permite administrar autores y publicaciones mediante operaciones CRUD completas, siguiendo una arquitectura por capas y utilizando PostgreSQL como sistema de persistencia.

---

# 📌 Descripción

Esta API administra un blog sencillo mediante dos entidades relacionadas:

- **Authors** (Autores)
- **Posts** (Publicaciones)

Cada autor puede tener múltiples publicaciones, implementando una relación **uno a muchos (1:N)** entre ambas entidades.

Toda la información se almacena de forma persistente en una base de datos PostgreSQL.

---

# 🌐 Deployment

## 🚀 Aplicación

https://proyectom2valentinaleyva-production.up.railway.app/

## 📖 Documentación Swagger

https://proyectom2valentinaleyva-production.up.railway.app/api-docs/

---

# ✨ Funcionalidades

## 👤 Authors

- Crear un autor.
- Listar todos los autores.
- Obtener un autor por ID.
- Actualizar un autor.
- Eliminar un autor.

## 📝 Posts

- Crear una publicación.
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
- Swagger UI Express
- Swagger (OpenAPI 3.0)
- Vitest
- Supertest
- Railway

---

# 📂 Estructura del proyecto

```text
PROYECTOM2_VALENTINALEYVA
│
├── api
│   ├── Capturas IA
│   │   ├── correccion de errores 2.png
│   │   ├── correccion de errores.png
│   │   ├── pg 1.png
│   │   └── test.png
│   │
│   ├── node_modules
│   │
│   ├── src
│   │
│   ├── config
│   │   ├── dbConnect.js
│   │   ├── envs.js
│   │   ├── initDb.js
│   │   └── swagger.js
│   │
│   ├── controllers
│   │   ├── authors.controller.js
│   │   └── post.controller.js
│   │
│   ├── middlewares
│   │   ├── authorCreateMiddleware.js
│   │   ├── genMiddleware.js
│   │   └── postCreateMiddleware.js
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
│   ├── server.js
│   ├── index.js
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
```

---

# 🗄️ Modelo de Base de Datos

La base de datos está compuesta por dos tablas relacionadas.

## Tabla **authors**

| Campo | Tipo |
|--------|------|
| id | SERIAL |
| name | VARCHAR(100) |
| email | VARCHAR(150) UNIQUE |
| bio | TEXT |
| created_at | TIMESTAMPTZ |

## Tabla **posts**

| Campo | Tipo |
|--------|------|
| id | SERIAL |
| author_id | INTEGER (FK) |
| title | VARCHAR(200) |
| content | TEXT |
| published | BOOLEAN |
| created_at | TIMESTAMPTZ |

### Relación entre tablas

```text
Authors (1)
      │
      │
      └───────────────< Posts (N)

Relación: Uno a Muchos (1:N)
```

Un autor puede tener muchas publicaciones, mientras que cada publicación pertenece únicamente a un autor.

---

# 🚀 Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/ValentinaLeyvaCR/ProyectoM2_ValentinaLeyva.git
```

## 2. Ingresar al proyecto

```bash
cd ProyectoM2_ValentinaLeyva/api
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Configurar las variables de entorno

Crear un archivo **.env** tomando como referencia el archivo:

```text
.env.example
```

Completar los datos de conexión a PostgreSQL.

Ejemplo:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=nombre_base_datos
DB_USER=postgres
DB_PASSWORD=tu_contraseña

DB_MAX_CONNECT=20
DB_IDLETIMEOUT=30000
DB_CONNECTIONTIMEOUT=2000

NODE_ENV=development
```

---

# ▶️ Ejecutar el proyecto

## Modo desarrollo

```bash
npm run dev
```

## Modo producción

```bash
npm start
```

---

# 🧪 Ejecutar los tests

Para ejecutar las pruebas automatizadas:

```bash
npm test
```

Los tests fueron desarrollados utilizando:

- Vitest
- Supertest

Actualmente se validan casos como:

- Creación de autores.
- Consulta de autores.
- Validación de datos obligatorios.
- Respuestas HTTP.
- Funcionamiento del servidor.

---

# 📌 Endpoints disponibles

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
- Manejo de errores de base de datos.

## Posts

- author_id obligatorio.
- title obligatorio.
- content obligatorio.
- Validación de recursos inexistentes.

---

# 📋 Códigos de respuesta HTTP

| Código | Descripción |
|---------|-------------|
| 200 | Operación realizada correctamente |
| 201 | Recurso creado correctamente |
| 400 | Error de validación |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |

---

# 🤖 Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó **ChatGPT** como herramienta de apoyo para:

- Resolver errores durante el desarrollo.
![correccion de error](./Capturas%20IA/correccion%20de%20errores.png) ![correccion de error](./Capturas%20IA/correccion%20de%20errores%202.png) 
- Comprender funciones de PostgreSQL.
![pg](./Capturas%20IA/pg%201.png) 
- Elaborar pruebas automatizadas con Vitest y Supertest.
![test](./Capturas%20IA/test.png) 
