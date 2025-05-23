const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Note = sequelize.define("Note", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  judul: { type: DataTypes.STRING, allowNull: false },
  deskripsi: { type: DataTypes.TEXT, allowNull: false },
}, {
  timestamps: true,
  tableName: "notes",
});

module.exports = Note;
