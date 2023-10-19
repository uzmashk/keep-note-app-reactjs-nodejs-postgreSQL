const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  port: 5433,
  dialect: process.env.DIALECT,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.note = require("./note")(sequelize, Sequelize);

module.exports = db;