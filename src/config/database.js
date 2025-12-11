import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import logger from './logger.js';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Connected (Sequelize)');
  } catch (err) {
    console.error('Unable to connect to DB:', err);
    logger.error(err.message);
  }
})();

export default sequelize;
