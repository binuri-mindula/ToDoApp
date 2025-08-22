import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    port: process.env.DBPORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    // Sync models
    await sequelize.sync({ alter: true }); // <- this will create missing tables
    console.log("All tables synchronized");
  } catch (err) {
    console.error("DB connection failed:", err);
  }
};

export { sequelize, connectDB };
