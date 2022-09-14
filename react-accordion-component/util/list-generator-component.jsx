import React from 'react';
import Accordion from '../components/accordion-component';

export default class ListGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propsData: this.props.data,
      displayContent: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const textContent = event.target.textContent;
    const { propsData } = this.state;
    const title = propsData.filter(index => propsData.title === textContent);
    if (title.title === textContent) {
      this.setState(prevState => ({
        displayContent: !prevState.displayContent
      }));
    }
  }

  render() {
    const { propsData, displayContent } = this.state;
    const listPoint = propsData.map(lib =>
      <li key={ lib.number }>
        <Accordion
          onChange={ this.handleChange }
          isActive={ displayContent }
          title={ lib.title }
          content={ lib.content } />
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
