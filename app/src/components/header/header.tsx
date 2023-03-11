import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

type linkType = {
  isActive: boolean;
};

export default class Header extends React.Component {
  render() {
    const setActive = (link: linkType) => (link.isActive ? 'active' : '');
    return (
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={setActive}>
                Main
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={setActive}>
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
