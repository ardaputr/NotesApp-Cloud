// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("notesapp", "root", "Tanyaarda", {
//   host: "34.72.212.141",
//   dialect: "mysql",
// });

// module.exports = sequelize;

// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("notesapp", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// module.exports = sequelize;

require('dotenv').config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

module.exports = sequelize;

