import {Router} from 'express';
import {authUser} from '../controllers/authUser.controller.js';
import {getUser} from '../controllers/getUser.controller.js';

const userRouter = Router();

userRouter.get('/', authUser);
userRouter.get('/:id', getUser);

export default userRouter;
