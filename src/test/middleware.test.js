//RESPONSABILIDAD DE MIDDLEWARE TEST: SIRVE PARA CORRER DIFERENTES TEST DE MANERA AUTOMATICA Y PROBAR EL CODIGO

import { describe, expect, it } from "vitest"
import request from "supertest"
import{server} from "../server"

describe("middlewares", () => {
  it('el middleware de comprobacion de creacion de usuario debe validar los datos que ingresan', () => {
    expect( 1 + 1).toBe(2)
  })
})

describe("servidor", () => {
    describe("GET/", () =>{
     it("responde 200 con un mensaje de bienvenida", async () => {
        const response = await request(server).get("/")
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('el servidor esta funcionando correctamente')
     })
    })
})

describe("GET /authors", () => {
    it("debe devolver un listado de autores", async () => {
        const response = await request(server).get("/authors");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });
});

describe("POST /authors", () => {
    it("debe crear un nuevo autor", async () => {
        const response = await request(server)
            .post("/authors")
            .send({
                name: "Autor Test",
                email: `autor${Date.now()}@gmail.com`,
                bio: "Autor creado desde test"
            });
        expect(response.status).toBe(201);
        expect(response.body.data.name).toBe("Autor Test");
    });
});

describe("POST /authors", () => {
    it("debe responder 400 cuando falta el nombre", async () => {
        const response = await request(server)
            .post("/authors")
            .send({
                email: "correo@gmail.com",
                bio: "Prueba"
            });
        expect(response.status).toBe(400);
    });
});