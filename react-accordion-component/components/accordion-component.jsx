import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      content: this.props.content,
      number: this.props.number,
      title: this.props.title
    };
  }

  render() {
    const { content, number, title } = this.state;
    return (
      <div className="ac-container" key={ number }>
        <div className="ac-title">
          <h2>{ title }</h2>
        </div>
        <div className="ac-context">
          <p>{ content }</p>
        </div>
      </div>
    );
  }
}
