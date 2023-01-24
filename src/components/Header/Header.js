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
            <NavLink to="/rgb/150/250/350">C1</NavLink>
          </li>
          <li>
            <NavLink to="/rgb/100/200/300">C2</NavLink>
          </li>
          <li>
            <NavLink to="/rgb/50/100/200">C3</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

