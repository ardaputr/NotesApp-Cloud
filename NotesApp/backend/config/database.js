const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("notesapp", "root", "Tanyaarda", {
  host: "34.72.212.141",
  dialect: "mysql",
});

module.exports = sequelize;
