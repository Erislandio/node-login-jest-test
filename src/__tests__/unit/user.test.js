const bcrypt = require("bcryptjs");

const { User } = require("../../app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', () => {
      
    const user = await User.create({
        name: "Erislandio soares",
        email: "erislandio.soares@acupula.com",
        password_hash: "1234"
    })

    const hash = await bcrypt.hash('123456', 8)

    expect(
        user.password_hash
    ).toBe(hash)


  });

});
