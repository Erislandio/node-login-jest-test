const { User } = require("../../app/models");

describe("Authentication", () => {
  it("should receive JWT token when authenticate with credentials", async () => {
    const user = await User.create({
      name: "José carlos",
      email: "josecarlos123@gmail.com",
      password_hash: "1234"
    });

    console.log(user);
    expect(user.email).toBe("josecarlos123@gmail.com");
  });
});
