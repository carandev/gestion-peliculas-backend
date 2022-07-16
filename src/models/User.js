import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import { Movie } from "./Movie.js";

export const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password : {
    type: DataTypes.STRING,
  }
})

User.hasMany(Movie, {
  foreignKey: 'user_id',
  sourceKey: 'id'
})

Movie.belongsTo(User, {
  foreignKey: 'user_id',
  targetId: 'id'
})
