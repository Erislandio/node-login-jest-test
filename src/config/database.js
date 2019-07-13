module.exports = {
  username: process.env.DB_USER,
  password: '',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
