import {Router} from 'express';
import tmdb from '../tmdb/tmbd.js';
import { Movie } from "../models/Movie.js";

const routerMovies = Router();

routerMovies.get('/popular/', (req, res) => {
  return tmdb.getMoviePopular(1).then(response => res.send(response));
});

routerMovies.get('/popular/:page', async (req, res) => {

  const {page} = req.params;

  if (!page) return res.sendStatus(404);

  const movies = await tmdb.getMoviePopular(page);

  if (!movies) return res.send(404);
  if (JSON.stringify(movies) === '{}') return res.sendStatus(404);
  
  return res.send(movies);

})

routerMovies.delete('/', async (req, res) => {
  const {id} = req.body;

  if (!id) return res.status(401).json({message: 'Invalid user id'});
  if (id === '') return res.status(401).json({message: 'Invalid user id'});

  await Movie.destroy({
    where: {
      id
    }
  })

  return res.sendStatus(200);
})

routerMovies.put('/', async (req, res) => {
  const {id, viewed} = req.body;

  if (!id) return res.status(401).json({message: 'Invalid user id'});
  if (id === '') return res.status(401).json({message: 'Invalid user id'});
  if (viewed === null) return res.status(401).json({message: 'Invalid viewed'});

  await Movie.update({viewed},{
    where: {
      id
    }
  })

  return res.sendStatus(200);
});

routerMovies.get('/:id', (req, res) => {
  tmdb.getMovie(req.params.id).then(response => {
    return res.send(response);
  });
});

routerMovies.post('/add', async (req, res) => {
  const {title, user_id, api_id} = req.body;
  
  if (!title) return res.status(401).json({message: 'Invalid title'})
  if (title === '') return res.status(401).json({message: 'Invalid title'})


  const isMovie = await Movie.findOne({
    where: {
      title,
      user_id
    }
  });

  if (isMovie) return res.status(401).json({message: 'Already is favorite'})

  const newMovie = await Movie.create({
    title,
    api_id,
    user_id
  })

  return res.status(200).json(newMovie);

})

export default routerMovies;
