import { jwtVerify } from "jose";
import {User} from '../models/User.js'

export const authUser = async (req, res) => {
  const {authorization} = req.headers;
  
  if (!authorization) return res.sendStatus(401);

    const encoder = new TextEncoder();
    try {
      const {payload} = await jwtVerify(authorization, encoder.encode(process.env.JWT_SECRET_KEY));

      const user = await User.findOne({
        where: {
          id: payload.id
        }
      })

      if (!user) return res.sendStatus(401);

      return res.json(user);
    } catch (error) {
      return res.status(401).json({message: error});
    }  
}
