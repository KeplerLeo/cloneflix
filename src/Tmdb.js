const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE = 'https://api.themoviedb.org/3';

const MOVIE_ENDPOINT = (id) => `/movie/${id}?language=pt-BR&api_key=${API_KEY}`;
const TV_ENDPOINT = (id) => `/tv/${id}?language=pt-BR&api_key=${API_KEY}`;
const ORIGINALS_ENDPOINT = `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`;

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const fetchCategory = async (slug, title, endpoint) => ({
  slug,
  title,
  items: await basicFetch(endpoint),
});

const typeEndpoints = {
  movie: MOVIE_ENDPOINT,
  tv: TV_ENDPOINT,
};

export default {
  getHomeList: async () => [
    await fetchCategory(
      'originals',
      'Originais do Netflix',
      ORIGINALS_ENDPOINT,
    ),
  ],

  getMovieInfo: async (movieId, type) => {
    const endpoint = typeEndpoints[type];
    return movieId && endpoint ? basicFetch(endpoint(movieId)) : null;
  },
};
