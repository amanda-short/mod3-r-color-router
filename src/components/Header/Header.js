import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="colorList">
          <NavLink to="/" exact={true}>
            Home
          </NavLink>
          <NavLink to="/rgb/21/158/26">Green</NavLink>
          <NavLink to="/rgb/248/255/14">Yellow</NavLink>
          <NavLink to="/rgb/255/0/230">Pink</NavLink>
        </div>
      </nav>
    </header>
  );
}

