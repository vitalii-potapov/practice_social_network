import React from 'react';
import { NavLink } from 'react-router-dom';
import './Aside.css';

function Aside() {
  return (
    <aside className="aside">
      <ul className="main-header">
        <li className="main-header__item">
          <NavLink to="/profile" className="main-header__link">Profile</NavLink>
        </li>
        <li className="main-header__item">
          <NavLink to="/dialogs" className="main-header__link">Dialogs</NavLink>
        </li>
        <li className="main-header__item">
          <NavLink to="/news" className="main-header__link">News</NavLink>
        </li>
        <li className="main-header__item">
          <NavLink to="/settings" className="main-header__link">Settings</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
