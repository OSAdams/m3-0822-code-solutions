import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, color: 'indigo' };
    this.onClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count++
    }));
  }

  whatColor() {
    if (this.state.count >= 2) {
      this.setState({ color: 'purple' });
    } else if (this.state.count >= 5) {
      this.setState({ color: 'violet' });
    } else if (this.state.count >= 8) {
      this.setState({ color: 'orange' });
    } else if (this.state.count >= 11) {
      this.setState({ color: 'yellow' });
    } else if (this.state.count >= 14) {
      this.setState({ color: 'white' });
    }
  }

  render() {
    return (
      <button className={ this.state.color }>
        <p>Hot Button</p>
      </button>
    );
  }
}
