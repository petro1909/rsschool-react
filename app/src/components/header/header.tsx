import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
