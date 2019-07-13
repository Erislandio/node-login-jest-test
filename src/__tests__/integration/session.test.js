const request = require("supertest");
const { User } = require("../../app/models");
const app = require("../../app.js");
const truncate = require("../utils/truncate");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credential", async () => {
    const user = await User.create({
      name: "Maria Eduarda",
      email: "mariadudu@gmail.com",
      password_hash: "12341234"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "12341234"
      });

    expect(response.status).toBe(200);
  });
});
