import React from 'react';
import { Props } from 'types/props';

export default class ProductForm extends React.Component {
  private titleInput: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.titleInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.titleInput.current?.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NameField value="" ref={this.titleInput} />
        <BirthdayField />
        <CountryField />
        <NotificationField />
        <SexField />
        <PhotoField />
      </form>
    );
  }
}

class NameField extends React.Component {
  // constructor(props: Props) {
  //   this.state = {value: }
  // }

  // validate(val) {
  //   return val !== '';
  // }

  render() {
    return (
      <div className="input__name">
        <label>Name:</label>
        <input type="text"></input>
      </div>
    );
  }
}

class BirthdayField extends React.Component {
  render() {
    return (
      <div className="input__birthday">
        <label>Birthday:</label>
        <input type="date"></input>
      </div>
    );
  }
}

class CountryField extends React.Component {
  render() {
    return (
      <div className="input__country">
        <label>Country:</label>
        <select>
          <option>USA</option>
        </select>
      </div>
    );
  }
}

class NotificationField extends React.Component {
  render() {
    return (
      <div className="input__notification">
        <label>Notifications:</label>
        <input type="checkbox" />
      </div>
    );
  }
}

class SexField extends React.Component {
  render() {
    return (
      <div className="input__sex">
        <label>Sex:</label>
        <input type="radio" value="Male" />
        <input type="radio" value="Female" />
      </div>
    );
  }
}

class PhotoField extends React.Component {
  render() {
    return (
      <div className="input__photo">
        <label>Photo:</label>
        <input type="file" />
      </div>
    );
  }
}
