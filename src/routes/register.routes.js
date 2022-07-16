import {Router} from 'express'
import {createUser} from '../controllers/register.controller.js'

const routerRegister = Router();

routerRegister.post('/register', createUser);

export default routerRegister;
