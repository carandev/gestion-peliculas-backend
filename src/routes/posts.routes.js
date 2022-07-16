import {Router} from 'express';
import {posts} from '../controllers/posts.controller.js'

const routerProfile = Router();

routerProfile.get('/posts', posts);

export default routerProfile;
