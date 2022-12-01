const supertest = require("supertest")
const app = require("../../app")
const UserModel = require("../models/users.model")

const api = supertest(app)

describe("Unit Test: USER_MODEL", () => {
    test("Creatting a new user", async () => {
        const newUser = await UserModel.create({
            email: "estebcz@hotmail.com",
            name: "Carlos Corrales Zamora",
            password: "1234"
        })
        expect(newUser).toHaveProperty('id')
    })

})

beforeAll(async () => {

})

describe("End-Point: [USER]", () => {
    test("Path: GET->/api/v1/users [make sure Content-Typye=application/json]", async () => {
        await api
            .get("/api/v1/users")
            .expect(200)
            .expect("Content-Type", /application\/json/)
    })

    test("Path: POST->/api/v1/users [make sure user is created and Content-Type=application/json]", async () => {
        await api
            .post("/api/v1/users")
            .send({
                "email": "estebcz@hotmail.com",
                "name": "Carlos Corrales Zamora",
                "password": "1234"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)

    })
})


