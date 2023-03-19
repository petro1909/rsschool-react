import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

type linkType = {
  isActive: boolean;
};

type HeaderContent = {
  title: string;
};

export default class Header extends React.Component<HeaderContent> {
  constructor(props: HeaderContent) {
    super(props);
  }
  render() {
    const setActive = (link: linkType) => (link.isActive ? 'active' : '');
    return (
      <header className="header">
        <h1>{this.props.title}</h1>
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
