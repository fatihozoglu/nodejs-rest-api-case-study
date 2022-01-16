const app = require("../app");
const supertest = require("supertest");
const db = require("../db_config/mongodb");

const request = supertest(app);

describe("Check endpoints", () => {
  // Connect to database before starting tests
  beforeAll(async () => await db.connect(process.env.MONGO_URI));
  // Close database connection when tests are completed
  afterAll(async () => await db.disconnect());

  test("POST request to '/' with valid input fields", async () => {
    const response = await request.post("/").send({
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: 2700,
      maxCount: 3000,
    });
    expect(response.status).toBe(200);
    expect(response.body.code).toBe(0);
    expect(response.body.msg).toBe("Success");
  });

  test("POST request to '/' with invalid input fields", async () => {
    const response = await request.post("/").send({
      startDate: "01-01-2016", // Not in YYYY-MM-DD format
      endDate: "2018-02-02",
      minCount: 2700,
      maxCount: 3000,
    });
    expect(response.status).toBe(400);
    expect(response.body.code).toBe(1);
    expect(response.body.msg).toBe("Please enter valid inputs");
  });

  test("GET request to '/'", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(404);
    expect(response.body.code).toBe(2);
    expect(response.body.msg).toBe("Resource Not Found");
  });

  test("PUT request to '/'", async () => {
    const response = await request.put("/");
    expect(response.status).toBe(404);
    expect(response.body.code).toBe(2);
    expect(response.body.msg).toBe("Resource Not Found");
  });

  test("DELETE request to '/'", async () => {
    const response = await request.delete("/");
    expect(response.status).toBe(404);
    expect(response.body.code).toBe(2);
    expect(response.body.msg).toBe("Resource Not Found");
  });
});
