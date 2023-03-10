import Cards from '../../components/cards/cards';
import SearchBar from '../../components/searchBar/searchBar';
import React from 'react';

export default class MainPage extends React.Component {
  render() {
    return (
      <section className="main">
        <SearchBar></SearchBar>
        <Cards></Cards>
      </section>
    );
  }
}
