import Sequelize from 'sequelize';

export const sequelize = new Sequelize('db_movies', 'root', 'admin', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
});
