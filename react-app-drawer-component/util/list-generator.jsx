import React from 'react';

export default class ListGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propsData: this.props.data
    };
  }

  render() {
    const listData = this.state.propsData;
    const listPoint = listData.map(lib =>
      <li key={lib.id}>{lib.text}</li>
    );
    return (
      <ul>
        {listPoint}
      </ul>
    );
  }
}
