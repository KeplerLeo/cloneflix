import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Header.css';

const NETFLIX_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png';
const USER_AVATAR_URL = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png';

export default function Header({ black }) {
  return (
    <header className={classnames({ black })}>
      <div className="header--logo">
        <img
          src={NETFLIX_LOGO_URL}
          alt="Netflix"
        />
      </div>
      <div className="header--user">
        <img
          src={USER_AVATAR_URL}
          alt="User"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  black: PropTypes.bool,
};

Header.defaultProps = {
  black: false,
};
