import Card from '../../components/card/card';
import SearchBar from '../../components/searchBar/searchBar';
import React from 'react';

export default class MainPage extends React.Component {
  render() {
    return (
      <section className="main">
        <Card></Card>
        <SearchBar></SearchBar>
      </section>
    );
  }
}
