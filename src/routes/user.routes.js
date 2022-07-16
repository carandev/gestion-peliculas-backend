import {Router} from 'express';
import {getUser} from '../controllers/user.controller.js'

const routerProfile = Router();

routerProfile.get('/', getUser);

export default routerProfile;
