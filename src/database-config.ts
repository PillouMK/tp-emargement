// config/database.ts

import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

// Créez une instance Sequelize avec la configuration appropriée
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE!,
  process.env.MYSQL_USER!,
  process.env.MYSQL_PASSWORD!,
  {
    host: process.env.MYSQL_HOST!,
    dialect: "mysql",
  }
);

// Teste la connexion
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

export default sequelize;
