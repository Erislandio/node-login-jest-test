module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  });

  return user;
};
