import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.whatColor = this.whatColor.bind(this);
  }

  handleClick() {
    return this.setState({ count: this.state.count + 1 });
  }

  whatColor() {
    const count = this.state.count;
    if (count >= 0 && count < 3) { return 'black'; }
    if (count >= 3 && count < 6) { return 'indigo'; }
    if (count >= 6 && count < 9) { return 'purple'; }
    if (count >= 9 && count < 12) { return 'violet'; }
    if (count >= 12 && count < 15) { return 'orange'; }
    if (count >= 15 && count < 18) { return 'yellow'; }
    if (count >= 18) { return 'white'; }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.whatColor()}>
        Hot Button
      </button>
    );
  }
}
