const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Maria Cleuda soares",
  email: "maria.soares@gmail.com",
  password_hash: "mariaMia"
});

module.exports = routes;
