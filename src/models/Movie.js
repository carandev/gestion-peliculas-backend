import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Movie = sequelize.define('movies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
  },
  api_id: {
    type: DataTypes.STRING,
  },
  viewed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
})
