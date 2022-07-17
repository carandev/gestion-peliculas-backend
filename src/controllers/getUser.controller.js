import {Movie} from '../models/Movie.js';

export const getUser = async (req, res) => {
  const {user_id} = req.params;
  
  if (!user_id) return res.status(401).json({message: 'Invalid user id'});
  if (user_id === '') return res.status(401).json({message: 'Invalid user id'});


  const movies = await Movie.findAll({
    where: {
      user_id
    }
  });

  if (!movies) return res.status(401).json({message: 'Empty movies'});

  return res.json(movies);

}