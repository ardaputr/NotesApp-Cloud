const sequelize = require("../config/database");
const Note = require("./note");
const User = require("./user");

const db = { sequelize, Note, User };

module.exports = db;
