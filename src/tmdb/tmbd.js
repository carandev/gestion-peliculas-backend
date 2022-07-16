import axios from "axios"

export default {
  getMoviePopular : async (page) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}`, {
      headers: {'Authorization': `Bearer ${process.env.TMDB_API_TOKEN}`}
    });

    return data;
  },
  
  getMovie: async (id) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {'Authorization': `Bearer ${process.env.TMDB_API_TOKEN}`}
    });

    return data;
  },
} 
