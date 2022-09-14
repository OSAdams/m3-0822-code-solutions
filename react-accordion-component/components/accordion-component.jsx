import React from 'react';

function AcContent(props) {
  const { content } = props;
  return (
    <div className="ac-content">
      <p>{ content }</p>
    </div>
  );
}

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      content: this.props.content,
      number: this.props.number,
      title: this.props.title
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    const { isActive, content, number, title } = this.state;
    return (
      <div className="ac-container" key={ number }>
        <div className="ac-title" onClick={ this.handleClick }>
          <h2>{ title }</h2>
        </div>
        { isActive
          ? <AcContent content={ content } />
          : null
        }
      </div>
    );
  }
}
