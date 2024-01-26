import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

const SCROLL_THRESHOLD = 10;

export default function Main() {
  const [homeList, setHomeList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadHomeList = async () => {
      const list = await Tmdb.getHomeList();
      setHomeList(list);
      return list;
    };

    const loadFeaturedData = async (list) => {
      const originals = list.filter((i) => i.slug === 'originals');
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    const loadAll = async () => {
      const list = await loadHomeList();
      await loadFeaturedData(list);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {homeList.map((item) => (
          <MovieRow key={item.id} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito por Leonardo Kepler Mesquita
        <br />
        Dados de API do
        {' '}
        <a href="https://github.com/keplerleo" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href="mailto:leokepler@gmail.com" aria-label="Email">
          <EmailIcon />
        </a>
        <br />
      </footer>

      {homeList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}
