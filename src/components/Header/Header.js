import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="colorList">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/rgb/21/158/26">Green</NavLink>
          </li>
          <li>
            <NavLink to="/rgb/248/255/14">Yellow</NavLink>
          </li>
          <li>
            <NavLink to="/rgb/255/0/230">Pink</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

