import { Sequelize } from "sequelize-typescript";

const database = new Sequelize({
  username: process.env.DB_USERNAME || "postgres",
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "automationn",
  password: process.env.DB_PASSWORD || "@nonenzy01",
  port: parseInt(process.env.DB_PORT!) || 5432,
  models: [__dirname + "/models"],
  logging: false,
});

export default database;
