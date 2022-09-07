import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.switchToggle = this.switchToggle.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      switchOn: !prevState.switchOn
    }));
  }

  switchToggle() {
    return !this.state.switchOn ? '' : 'on';
  }

  render() {
    const toggleStatus = this.switchToggle();
    return (
      <div className={ `switch-container ${toggleStatus}` }>
        <div className={ `toggle-switch ${toggleStatus}` } onClick={ this.handleClick }></div>
      </div>
    );
  }
}
