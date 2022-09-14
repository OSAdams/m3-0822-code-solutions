import React from 'react';
import menuOptions from '../data/menu-options';
import ListGenerator from '../util/list-generator';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  updateState() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }

  showMenu() {
    const { isToggled } = this.state;
    if (!isToggled) {
      this.updateState();
    }
  }

  hideMenu() {
    const { isToggled } = this.state;
    if (isToggled) {
      this.updateState();
    }
  }

  render() {
    // eslint-disable-next-line
    console.log('app-drawer:', this.state);
    const { isToggled } = this.state;
    if (!isToggled) {
      return (
      <>
        <div>
          <i className="fa-solid fa-bars" onClick={ this.showMenu }></i>
        </div>
      </>
      );
    } else if (isToggled) {
      return (
      <>
        <div className="nav-container" onClick={ this.hideMenu }>
          <div className="nav-bar" onClick={ this.showMenu }>
            <h2>What happens next?</h2>
            <ListGenerator onClick={ this.hideMenu } data={ menuOptions } />
          </div>
        </div>
      </>
      );
    }
  }
}
