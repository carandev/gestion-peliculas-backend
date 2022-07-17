import express from 'express'
import cors  from 'cors';
import dotenv from 'dotenv';
import routerRegister from './routes/register.routes.js';
import routerLogin from './routes/login.routes.js';
import userRouter from './routes/user.routes.js';
import routerMovies from './routes/popularMovies.routes.js';
import {sequelize} from './database/database.js';
import app from './app.js';

dotenv.config();
const PORT = process.env.PORT

const main = async () => {
  await sequelize.sync()

  app.use(cors());

  app.use(express.json());
  app.use(routerRegister);
  app.use(routerLogin);
  app.use('/user/', userRouter);
  app.use('/movies/', routerMovies);

  app.listen(PORT);
}

main();
