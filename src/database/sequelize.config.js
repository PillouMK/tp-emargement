require("ts-node/register");
const configs = require("../configs.ts");

module.exports = {
  username: configs.MYSQL_USER,
  password: configs.MYSQL_PASSWORD,
  database: configs.MYSQL_DATABASE,
  host: configs.MYSQL_HOST,
  dialect: "mysql",
  port: 3306,
};
