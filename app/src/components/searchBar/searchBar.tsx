import React from 'react';
import {
  getValueByKeyFromLocalStorage,
  setValueByKeyToLocalStorage,
} from '../../service/storageService';
type Props = {
  value?: string;
};
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
      <div>
        <input
          type="text"
          placeholder="default"
          value={this.state.text}
          onChange={(e) => this.onChange(e)}
        ></input>
      </div>
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
