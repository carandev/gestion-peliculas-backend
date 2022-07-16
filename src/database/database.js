import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  POSTGRESQL_HOSTNAME, 
  POSTGRESQL_PORT,
  POSTGRESQL_USER,
  POSTGRESQL_PASSWORD,
  POSTGRESQL_DB
} = process.env;

console.log(POSTGRESQL_DB);

export const sequelize = new Sequelize(POSTGRESQL_DB, POSTGRESQL_USER, POSTGRESQL_PASSWORD, {
  host: POSTGRESQL_HOSTNAME,
  port: POSTGRESQL_PORT,
  dialect: 'postgres',
});
