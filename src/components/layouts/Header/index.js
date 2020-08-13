import React from 'react';
import './style.css';

const Header = (props) => {
  const { logo, children } = props;

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">{children}</div>
    </header>
  );
};

export default Header;
