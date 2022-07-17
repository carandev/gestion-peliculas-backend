import bcryptjs from 'bcryptjs';
import {User} from '../models/User.js';

export const createUser = async (req, res) => {
  const {username, password, name} = req.body;

  if (!username || !password || !name) return res.sendStatus(401);
  if (username === '' || password === '' || name === '') return res.sendStatus(401);

  const isUser = await User.findOne({
    where: {
      username,
    }
  });

  if (isUser) return res.sendStatus(401);

  const passwordHashed = await bcryptjs.hash(password, 8);

  const user = await User.create({
    name,
    username,
    password: passwordHashed
  });

  return res.sendStatus(user);
}
