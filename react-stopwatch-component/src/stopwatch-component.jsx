import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: true
    };
  }

  render() {
    return (
      <div><p>Hello World</p></div>
    );
  }
}
