import React from "react";
import "./Header.css";

export default (black) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png" alt="Netflix" />
      </div>
      <div className="header--user">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
      </div>
    </header>
  )
}