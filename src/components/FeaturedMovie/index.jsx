import React from 'react';
import PropTypes from 'prop-types';
import './FeatureMovie.css';

const MAX_DESCRIPTION_LENGTH = 200;

function generateGenresList(genres) {
  return genres.map((genre) => genre.name);
}

function truncateDescription(description) {
  return description.length > MAX_DESCRIPTION_LENGTH
    ? `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
    : description;
}

function FeaturedMovie({ item }) {
  const genres = generateGenresList(item.genres);
  const description = truncateDescription(item.overview);

  return (
    <section
      className="featured"
      style={{
        backgroudSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {item.vote_average}
              {' '}
              pontos
            </div>
            <div className="featured--year">
              {new Date(item.first_air_date).getFullYear()}
            </div>
            <div className="featured--seasons">
              {item.number_of_seasons}
              {' '}
              temporada
              {item.number_of_seasons > 1 ? 's' : ''}
            </div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton">
              ► Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="featured--mylistbutton">
              + Minha lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>
              Gêneros:
              {genres.join(', ')}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturedMovie.propTypes = {
  item: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    overview: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    original_name: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    first_air_date: PropTypes.string.isRequired,
    number_of_seasons: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeaturedMovie;
