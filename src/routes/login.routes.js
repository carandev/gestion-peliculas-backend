import {Router} from 'express';
import {login} from '../controllers/login.controller.js'

const routerLogin = Router();

routerLogin.post('/login', login);

export default routerLogin;
