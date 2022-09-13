import React from 'react';

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isValidated: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const { password } = this.state;
    this.setState({ [name]: value });
    if (password.length > 7) {
      this.setState({ isValidated: true });
    } else {
      this.setState({ isValidated: false });
    }
  }

  validatedPassword() {
    const { isValidated } = this.state;
    if (!isValidated) {
      return 'fa-solid fa-x red';
    } else {
      return 'fa-sharp fa-solid fa-check green';
    }
  }

  passwordAlert() {
    const { password } = this.state;
    const inputLength = password.length;
    if (Boolean(inputLength) && inputLength <= 7) {
      return 'Your password is too short.';
    } else if (inputLength > 7) {
      return '';
    } else if (!inputLength) {
      return 'A password is required';
    }
  }

  render() {
    // eslint-disable-next-line
    console.log('----STATE----');
    // eslint-disable-next-line
    console.log(this.state);
    const isValid = this.validatedPassword();
    const pwAlert = this.passwordAlert();
    return (
      <div className="form-container">
        <form>
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="password"
            id="password"
            value={ this.state.password }
            onChange={ this.handleChange } />
          <i className={ isValid }></i>
          <p className="red">{ pwAlert }</p>
        </form>
      </div>
    );
  }
}
