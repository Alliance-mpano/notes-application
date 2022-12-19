const { app } = require("../app");
const supertest = require("supertest");
const mongoose = require("mongoose");
const { connectMongoDb } = require("../models/connectToDB");

describe('NOTES API E2E TESTS', () => {
  
    beforeAll(async()=> {
        await connectMongoDb();
    });

    afterAll(async()=> {
        await mongoose.connection.close(true);
    });

    it("POST /api/notes/add", async ()=> {
        await supertest(app).post("/api/notes/add")
            .send({ body: "Create a new application" })
            .set('Accept', 'application/json')
            .expect(201);
    });

    it("POST /api/notes/update", async()=>{
        await supertest(app)
            .post('/api/notes/update')
            .send({ body: "Create a new REACT application" })
            .set('Accept', 'applcation/json')
            .expect(200)
    }); 

    

    it("GET /api/notes/all", async()=>{
        await supertest(app)
            .get('/api/notes/all')
            .set('Accept', 'applcation/json')
            .expect('Content-Type', /text/)
            .expect(200);
    }); 
    it("DELETE /api/notes/delete", async()=>{
        await supertest(app)
            .post('/api/notes/delete')
            .set('Accept', 'application/json')
            .expect(400);
    })
});