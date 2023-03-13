import React from 'react';
import './searchBar.css';
import searchIcon from '../../assets/search.svg';
import { getValueByKeyFromLocalStorage, setValueByKeyToLocalStorage } from '../../service/storageService';
import { Props } from 'types/props';

type SearchBarState = {
  storageKey: string;
  text: string;
};

export default class SearchBar extends React.Component<Props, SearchBarState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      storageKey: 'searchValue',
      text: '',
    };
  }
  componentDidMount(): void {
    this.setState({ text: getValueByKeyFromLocalStorage(this.state.storageKey) });
  }
  render() {
    return (
      <section className="search-wrapper">
        <div className="search">
          <input className="search__input" type="text" placeholder="search" value={this.state.text} onChange={(e) => this.onChange(e)}></input>
          <button className="search__submit">
            <img className="search__image" src={searchIcon}></img>
          </button>
        </div>
      </section>
    );
  }

  onChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.setState({ text: target.value });
  }

  componentWillUnmount(): void {
    setValueByKeyToLocalStorage(this.state.storageKey, this.state.text);
  }
}
