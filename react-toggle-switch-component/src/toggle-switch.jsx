import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      switchOn: !prevState.switchOn
    }));
  }

  handleToggle() {
    return !this.state.switchOn ? 'off' : 'on';
  }

  render() {
    const toggleStatus = this.handleToggle();
    return (
      <div className={ `switch-container ${toggleStatus}` }>
        <div className={ `toggle-switch ${toggleStatus}` } onClick={ this.handleClick }></div>
      </div>
    );
  }
}
