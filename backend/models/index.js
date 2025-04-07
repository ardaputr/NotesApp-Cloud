const sequelize = require("../config/database");
const Note = require("./note");

const db = { sequelize, Note };

module.exports = db;
