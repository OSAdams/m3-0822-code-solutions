import React from 'react';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log('state: ', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" placeholder="JonSnow" value={ this.state.username } onChange={ this.handleUsernameChange } />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="********" value={ this.state.password } onChange={ this.handlePasswordChange } />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
