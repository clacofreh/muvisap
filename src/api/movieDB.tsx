import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '8ce0409b99a8889f400962628da176e9',
    language: 'es-ES',
  },
});
export default movieDB;
