import React from 'react';
import Accordion from '../components/accordion-component';

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
      <li key={ lib.number }>
        <Accordion title={ lib.title } content={ lib.content } />
      </li>
    );
    return (
      <div className="un-list">
        <ul>
          { listPoint }
        </ul>
      </div>
    );
  }
}
