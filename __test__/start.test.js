const app = require("../server")
const supertest = require("supertest")

it('Get the root endpoint', async () => {

  const response = await supertest(app).get("/test")

  expect(response.status).toBe(200)

})