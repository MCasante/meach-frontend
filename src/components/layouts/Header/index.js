import React from 'react';
import './style.css';

import logo from './../../../assets/images/meach-logo.svg';

const Header = (props) => {
  return (
    <header className="app_header">
      <div className="container">
        <div className="logo">
          <img src={logo} width="250" height="115" alt="Meach Logo" />
        </div>
        <div className="menu">{props.children}</div>
      </div>
    </header>
  );
};

export default Header;
