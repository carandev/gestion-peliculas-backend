import bcryptjs from 'bcryptjs';
import {SignJWT} from 'jose';
import {User} from '../models/User.js';

export const login = async (req, res) => {
  const {username, password} = req.body;

  if (!username || !password) return res.sendStatus(401);
  if (username === "" || password === "") return res.sendStatus(401);

  try {
    
    const user = await User.findOne({
      where: {
        username,
      }
    });

    if(!(await bcryptjs.compare(password, user.password))) return res.sendStatus(401);

    if (!user) return res.sendStatus(401);

    const jwtConstructor = new SignJWT({id: user.id});
    
    const encoder = new TextEncoder();

    const jwt = await jwtConstructor
      .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(encoder.encode(process.env.JWT_SECRET_KEY));

    return res.send({jwt});
  } catch (error) {
    return res.sendStatus(401);  
  }

}
