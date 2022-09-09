import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isTicking: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    if (!this.state.isTicking) {
      this.interval = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      return this.setState({ isTicking: true });
    }
    clearInterval(this.interval);
    return this.setState({ isTicking: false });
  }

  handleReset() {
    if (!this.state.isTicking) {
      return this.setState({ count: 0 });
    }
  }

  render() {
    // eslint-disable-next-line
    console.log(this.state);
    return (
      <>
      <div className="stopwatch-container">
        <div className="stopwatch" onClick={ this.handleReset }>
          <p className="stopwatch-count">{ this.state.count }</p>
        </div>
        <div className="stopwatch-toggle">
            <i className={ !this.state.isTicking ? 'fa fa-play' : 'fa fa-pause' } onClick={ this.handleClick } />
        </div>
      </div>
      </>
    );
  }
}
