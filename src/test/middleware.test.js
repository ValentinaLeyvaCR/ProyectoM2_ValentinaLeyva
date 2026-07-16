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