require("dotenv").config({
  path: process.env.NODE_ENV === "teste" ? ".env.test" : ".env"
});


module.exports = {
  username: process.env.DB_USER,
  password: '',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
  storage: "./__tests__/database.sql",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
