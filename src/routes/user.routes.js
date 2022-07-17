import {Router} from 'express';
import {authUser} from '../controllers/authUser.controller.js';
import {getUser} from '../controllers/getUser.controller.js';
import {createUser} from '../controllers/register.controller.js'

const userRouter = Router();

userRouter.get('/', authUser);
userRouter.get('/:user_id', getUser);
userRouter.post('/', createUser);

export default userRouter;
