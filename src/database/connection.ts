import { Sequelize } from "sequelize";
import {
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} from "../config";

let sequelizeConnection: Sequelize = new Sequelize(
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  {
    host: MYSQL_HOST,
    dialect: "mysql",
    port: 3306,
  }
);

export default sequelizeConnection;
