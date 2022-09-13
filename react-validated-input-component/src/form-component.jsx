import React from 'react';

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isValid: false,
      message: 'A password is required.'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    return !value
      ? this.setState({ [name]: value, message: 'A Password is required', isValid: false })
      : value.length > 0 && value.length <= 7
        ? this.setState({ [name]: value, message: 'Your password is too short', isValid: false })
        : this.setState({ [name]: value, message: '', isValid: true });
  }

  render() {
    const { isValid, message } = this.state;
    return (
      <div className="form-container">
        <form>
          <div>
          <label htmlFor="password">Password: </label>
            <input
              name="password"
              type="password"
              id="password"
              value={ this.state.password }
              onChange={ this.handleChange } />
            <i className={ !isValid ? 'fa-solid fa-x red' : 'fa-sharp fa-solid fa-check green' }></i>
            <p className="red">{ message }</p>
          </div>
        </form>
      </div>
    );
  }
}
