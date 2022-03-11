const API_KEY = 'c9fdf4fa5f87d2a7accb459e72b64bb1';
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Originais da Netflix
 * Recomendados (Trending)
 * Em alta (Top Rated)
 * Ação (Action)
 * Aventura (Adventure)
 * Comédia (Comedy)
 * Terror (Horror)
 * Documentário (Documentary)
 */
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: [],
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: [],
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: [],
      },
      {
        slug: 'action',
        title: 'Ação',
        items: [],
      },
      {
        slug: 'adventure',
        title: 'Aventura',
        items: [],
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: [],
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: [],
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: [],
      },
    ];
  }
}