/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
const ITEM_WIDTH = 150;

export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = React.useState(0);

  const scrollLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2.5);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const scrollRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2.5);
    const listW = items.results.length * ITEM_WIDTH;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={scrollLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={scrollRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * ITEM_WIDTH,
          }}
        >
          {items.results.length > 0
            && items.results.map((item) => (
              <div className="movieRow--item" key={item.id}>
                <img
                  src={`${IMAGE_BASE_URL}${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

MovieRow.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        original_title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
